import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaAccessQuotaStatus } from "./googleanalyticsadminv1alphaaccessquotastatus";
import { GoogleAnalyticsAdminV1alphaAccessQuotaStatus } from "./googleanalyticsadminv1alphaaccessquotastatus";
import { GoogleAnalyticsAdminV1alphaAccessQuotaStatus } from "./googleanalyticsadminv1alphaaccessquotastatus";
import { GoogleAnalyticsAdminV1alphaAccessQuotaStatus } from "./googleanalyticsadminv1alphaaccessquotastatus";
import { GoogleAnalyticsAdminV1alphaAccessQuotaStatus } from "./googleanalyticsadminv1alphaaccessquotastatus";


// GoogleAnalyticsAdminV1alphaAccessQuota
/** 
 * Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
**/
export class GoogleAnalyticsAdminV1alphaAccessQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=concurrentRequests" })
  concurrentRequests?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;

  @Metadata({ data: "json, name=serverErrorsPerProjectPerHour" })
  serverErrorsPerProjectPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;

  @Metadata({ data: "json, name=tokensPerDay" })
  tokensPerDay?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;

  @Metadata({ data: "json, name=tokensPerHour" })
  tokensPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;

  @Metadata({ data: "json, name=tokensPerProjectPerHour" })
  tokensPerProjectPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
}
