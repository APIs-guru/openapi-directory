import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestStatusEnum } from "./requeststatusenum";
export declare class ListRequestedServiceQuotaChangeHistoryRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    serviceCode?: string;
    status?: RequestStatusEnum;
}
