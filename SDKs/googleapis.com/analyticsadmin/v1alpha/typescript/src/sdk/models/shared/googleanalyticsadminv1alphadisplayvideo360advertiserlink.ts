import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink
/** 
 * A link between a GA4 property and a Display & Video 360 advertiser.
**/
export class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @Metadata({ data: "json, name=advertiserDisplayName" })
  advertiserDisplayName?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=campaignDataSharingEnabled" })
  campaignDataSharingEnabled?: boolean;

  @Metadata({ data: "json, name=costDataSharingEnabled" })
  costDataSharingEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
