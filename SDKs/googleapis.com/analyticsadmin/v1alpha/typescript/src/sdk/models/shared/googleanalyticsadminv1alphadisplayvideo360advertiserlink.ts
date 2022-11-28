import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink
/** 
 * A link between a GA4 property and a Display & Video 360 advertiser.
**/
export class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink extends SpeakeasyBase {
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
}


// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput
/** 
 * A link between a GA4 property and a Display & Video 360 advertiser.
**/
export class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignDataSharingEnabled" })
  campaignDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=costDataSharingEnabled" })
  costDataSharingEnabled?: boolean;
}
