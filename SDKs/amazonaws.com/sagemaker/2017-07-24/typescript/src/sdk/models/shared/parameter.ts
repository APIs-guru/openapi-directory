import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Parameter
/** 
 * Assigns a value to a named Pipeline parameter.
**/
export class Parameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
