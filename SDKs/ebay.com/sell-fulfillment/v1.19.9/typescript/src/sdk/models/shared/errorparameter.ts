import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorParameter
/** 
 * This type contains the name and value of an input parameter that contributed to a specific error or warning condition.
**/
export class ErrorParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
