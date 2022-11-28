import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaStatus } from "./quotastatus";
/**
 * Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
**/
export declare class PropertyQuota extends SpeakeasyBase {
    concurrentRequests?: QuotaStatus;
    potentiallyThresholdedRequestsPerHour?: QuotaStatus;
    serverErrorsPerProjectPerHour?: QuotaStatus;
    tokensPerDay?: QuotaStatus;
    tokensPerHour?: QuotaStatus;
    tokensPerProjectPerHour?: QuotaStatus;
}
