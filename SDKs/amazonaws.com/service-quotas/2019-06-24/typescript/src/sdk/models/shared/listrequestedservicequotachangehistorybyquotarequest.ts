import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestStatusEnum } from "./requeststatusenum";



export class ListRequestedServiceQuotaChangeHistoryByQuotaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RequestStatusEnum;
}
