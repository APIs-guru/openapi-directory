import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaGoogleAdsLink
/** 
 * A link between a GA4 property and a Google Ads account.
**/
export class GoogleAnalyticsAdminV1alphaGoogleAdsLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @Metadata({ data: "json, name=canManageClients" })
  canManageClients?: boolean;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creatorEmailAddress" })
  creatorEmailAddress?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
