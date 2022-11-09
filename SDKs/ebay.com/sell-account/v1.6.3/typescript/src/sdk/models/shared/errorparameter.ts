import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorParameter
/** 
 * A complex type that indicates a parameter that caused an error and the value of the parameter which caused the error.
**/
export class ErrorParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
