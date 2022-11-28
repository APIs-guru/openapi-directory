import { SpeakeasyBase } from "../../../internal/utils";
import { RequestStatusEnum } from "./requeststatusenum";
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    quotaCode: string;
    serviceCode: string;
    status?: RequestStatusEnum;
}
