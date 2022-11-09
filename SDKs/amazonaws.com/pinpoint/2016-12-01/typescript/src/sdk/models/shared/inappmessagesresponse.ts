import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InAppMessageCampaign } from "./inappmessagecampaign";


// InAppMessagesResponse
/** 
 * Get in-app messages response object.
**/
export class InAppMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InAppMessageCampaigns", elemType: shared.InAppMessageCampaign })
  inAppMessageCampaigns?: InAppMessageCampaign[];
}
