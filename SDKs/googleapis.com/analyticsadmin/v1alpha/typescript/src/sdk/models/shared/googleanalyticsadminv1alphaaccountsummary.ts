import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaPropertySummary } from "./googleanalyticsadminv1alphapropertysummary";


// GoogleAnalyticsAdminV1alphaAccountSummary
/** 
 * A virtual resource representing an overview of an account and all its child GA4 properties.
**/
export class GoogleAnalyticsAdminV1alphaAccountSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=propertySummaries", elemType: shared.GoogleAnalyticsAdminV1alphaPropertySummary })
  propertySummaries?: GoogleAnalyticsAdminV1alphaPropertySummary[];
}
