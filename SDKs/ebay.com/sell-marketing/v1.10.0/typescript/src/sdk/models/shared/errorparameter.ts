import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorParameter
/** 
 * A name/value pair that provides parameter details regarding a warning or error condition.
**/
export class ErrorParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
