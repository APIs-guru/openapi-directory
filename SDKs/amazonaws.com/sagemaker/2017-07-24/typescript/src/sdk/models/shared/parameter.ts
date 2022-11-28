import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Parameter
/** 
 * Assigns a value to a named Pipeline parameter.
**/
export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
