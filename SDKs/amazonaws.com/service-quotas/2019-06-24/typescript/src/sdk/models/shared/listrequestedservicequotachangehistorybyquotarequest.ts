import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestStatusEnum } from "./requeststatusenum";


export class ListRequestedServiceQuotaChangeHistoryByQuotaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode: string;

  @Metadata({ data: "json, name=Status" })
  status?: RequestStatusEnum;
}
