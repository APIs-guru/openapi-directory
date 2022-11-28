import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestedServiceQuotaChange } from "./requestedservicequotachange";



export class RequestServiceQuotaIncreaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequestedQuota" })
  requestedQuota?: RequestedServiceQuotaChange;
}
