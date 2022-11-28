import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaPropertySummary } from "./googleanalyticsadminv1alphapropertysummary";



// GoogleAnalyticsAdminV1alphaAccountSummary
/** 
 * A virtual resource representing an overview of an account and all its child GA4 properties.
**/
export class GoogleAnalyticsAdminV1alphaAccountSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=propertySummaries", elemType: GoogleAnalyticsAdminV1alphaPropertySummary })
  propertySummaries?: GoogleAnalyticsAdminV1alphaPropertySummary[];
}
