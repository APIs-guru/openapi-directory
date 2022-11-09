import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorParameter
/** 
 * Container for a error parameter.
**/
export class ErrorParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
