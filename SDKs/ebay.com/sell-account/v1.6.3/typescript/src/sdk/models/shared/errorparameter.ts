import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorParameter
/** 
 * A complex type that indicates a parameter that caused an error and the value of the parameter which caused the error.
**/
export class ErrorParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
