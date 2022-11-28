import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FulfillmentCodeHookSettings
/** 
 * Determines if a Lambda function should be invoked for a specific intent.
**/
export class FulfillmentCodeHookSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}
