import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestedServiceQuotaChange } from "./requestedservicequotachange";



export class ListRequestedServiceQuotaChangeHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestedQuotas", elemType: RequestedServiceQuotaChange })
  requestedQuotas?: RequestedServiceQuotaChange[];
}
