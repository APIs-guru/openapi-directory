import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InAppMessageCampaign } from "./inappmessagecampaign";



// InAppMessagesResponse
/** 
 * Get in-app messages response object.
**/
export class InAppMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InAppMessageCampaigns", elemType: InAppMessageCampaign })
  inAppMessageCampaigns?: InAppMessageCampaign[];
}
