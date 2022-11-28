import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorParameter
/** 
 * A name/value pair that provides parameter details regarding a warning or error condition.
**/
export class ErrorParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
