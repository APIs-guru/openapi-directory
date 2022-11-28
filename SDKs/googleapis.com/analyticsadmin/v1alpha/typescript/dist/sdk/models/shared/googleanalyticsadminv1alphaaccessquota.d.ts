import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessQuotaStatus } from "./googleanalyticsadminv1alphaaccessquotastatus";
/**
 * Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
**/
export declare class GoogleAnalyticsAdminV1alphaAccessQuota extends SpeakeasyBase {
    concurrentRequests?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    serverErrorsPerProjectPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    tokensPerDay?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    tokensPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    tokensPerProjectPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
}
