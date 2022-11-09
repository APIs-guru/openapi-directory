import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignHook } from "./campaignhook";
import { CampaignLimits } from "./campaignlimits";
import { QuietTime } from "./quiettime";


// ApplicationSettingsResource
/** 
 * Provides information about an application, including the default settings for an application.
**/
export class ApplicationSettingsResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=CampaignHook" })
  campaignHook?: CampaignHook;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=Limits" })
  limits?: CampaignLimits;

  @Metadata({ data: "json, name=QuietTime" })
  quietTime?: QuietTime;
}
