import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestedServiceQuotaChange } from "./requestedservicequotachange";


export class RequestServiceQuotaIncreaseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestedQuota" })
  requestedQuota?: RequestedServiceQuotaChange;
}
