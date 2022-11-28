import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput
/** 
 * A link between a GA4 property and a Google Ads account.
**/
export class GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;
}


// GoogleAnalyticsAdminV1alphaGoogleAdsLink
/** 
 * A link between a GA4 property and a Google Ads account.
**/
export class GoogleAnalyticsAdminV1alphaGoogleAdsLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canManageClients" })
  canManageClients?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorEmailAddress" })
  creatorEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
