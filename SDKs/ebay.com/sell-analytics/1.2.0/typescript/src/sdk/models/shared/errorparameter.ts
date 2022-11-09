import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorParameter
/** 
 * A complex type that defines an error and error message.
**/
export class ErrorParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
