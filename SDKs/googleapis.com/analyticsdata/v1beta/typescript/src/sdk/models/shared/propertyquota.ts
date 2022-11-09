import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QuotaStatus } from "./quotastatus";
import { QuotaStatus } from "./quotastatus";
import { QuotaStatus } from "./quotastatus";
import { QuotaStatus } from "./quotastatus";
import { QuotaStatus } from "./quotastatus";
import { QuotaStatus } from "./quotastatus";


// PropertyQuota
/** 
 * Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
**/
export class PropertyQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=concurrentRequests" })
  concurrentRequests?: QuotaStatus;

  @Metadata({ data: "json, name=potentiallyThresholdedRequestsPerHour" })
  potentiallyThresholdedRequestsPerHour?: QuotaStatus;

  @Metadata({ data: "json, name=serverErrorsPerProjectPerHour" })
  serverErrorsPerProjectPerHour?: QuotaStatus;

  @Metadata({ data: "json, name=tokensPerDay" })
  tokensPerDay?: QuotaStatus;

  @Metadata({ data: "json, name=tokensPerHour" })
  tokensPerHour?: QuotaStatus;

  @Metadata({ data: "json, name=tokensPerProjectPerHour" })
  tokensPerProjectPerHour?: QuotaStatus;
}
