import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FulfillmentCodeHookSettings
/** 
 * Determines if a Lambda function should be invoked for a specific intent.
**/
export class FulfillmentCodeHookSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}
