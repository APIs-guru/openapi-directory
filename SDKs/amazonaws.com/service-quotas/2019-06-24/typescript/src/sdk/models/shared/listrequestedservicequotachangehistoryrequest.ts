import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestStatusEnum } from "./requeststatusenum";


export class ListRequestedServiceQuotaChangeHistoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;

  @Metadata({ data: "json, name=Status" })
  status?: RequestStatusEnum;
}
