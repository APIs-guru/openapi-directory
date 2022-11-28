import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaSearchAds360Link
/** 
 * A link between a GA4 property and a Search Ads 360 entity.
**/
export class GoogleAnalyticsAdminV1alphaSearchAds360Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=advertiserDisplayName" })
  advertiserDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignDataSharingEnabled" })
  campaignDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=costDataSharingEnabled" })
  costDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=siteStatsSharingEnabled" })
  siteStatsSharingEnabled?: boolean;
}


// GoogleAnalyticsAdminV1alphaSearchAds360LinkInput
/** 
 * A link between a GA4 property and a Search Ads 360 entity.
**/
export class GoogleAnalyticsAdminV1alphaSearchAds360LinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignDataSharingEnabled" })
  campaignDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=costDataSharingEnabled" })
  costDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=siteStatsSharingEnabled" })
  siteStatsSharingEnabled?: boolean;
}
