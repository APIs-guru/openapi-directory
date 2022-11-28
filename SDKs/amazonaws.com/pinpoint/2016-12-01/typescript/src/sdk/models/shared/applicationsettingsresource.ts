import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignHook } from "./campaignhook";
import { CampaignLimits } from "./campaignlimits";
import { QuietTime } from "./quiettime";



// ApplicationSettingsResource
/** 
 * Provides information about an application, including the default settings for an application.
**/
export class ApplicationSettingsResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=CampaignHook" })
  campaignHook?: CampaignHook;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Limits" })
  limits?: CampaignLimits;

  @SpeakeasyMetadata({ data: "json, name=QuietTime" })
  quietTime?: QuietTime;
}
