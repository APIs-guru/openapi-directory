import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaStatus } from "./quotastatus";



// PropertyQuota
/** 
 * Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
**/
export class PropertyQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concurrentRequests" })
  concurrentRequests?: QuotaStatus;

  @SpeakeasyMetadata({ data: "json, name=potentiallyThresholdedRequestsPerHour" })
  potentiallyThresholdedRequestsPerHour?: QuotaStatus;

  @SpeakeasyMetadata({ data: "json, name=serverErrorsPerProjectPerHour" })
  serverErrorsPerProjectPerHour?: QuotaStatus;

  @SpeakeasyMetadata({ data: "json, name=tokensPerDay" })
  tokensPerDay?: QuotaStatus;

  @SpeakeasyMetadata({ data: "json, name=tokensPerHour" })
  tokensPerHour?: QuotaStatus;

  @SpeakeasyMetadata({ data: "json, name=tokensPerProjectPerHour" })
  tokensPerProjectPerHour?: QuotaStatus;
}
