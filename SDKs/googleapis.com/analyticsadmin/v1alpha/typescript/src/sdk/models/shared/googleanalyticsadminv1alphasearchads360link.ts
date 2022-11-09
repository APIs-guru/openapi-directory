import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaSearchAds360Link
/** 
 * A link between a GA4 property and a Search Ads 360 entity.
**/
export class GoogleAnalyticsAdminV1alphaSearchAds360Link extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=siteStatsSharingEnabled" })
  siteStatsSharingEnabled?: boolean;
}
