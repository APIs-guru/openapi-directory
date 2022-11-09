import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RequestedServiceQuotaChange } from "./requestedservicequotachange";


export class ListRequestedServiceQuotaChangeHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RequestedQuotas", elemType: shared.RequestedServiceQuotaChange })
  requestedQuotas?: RequestedServiceQuotaChange[];
}
