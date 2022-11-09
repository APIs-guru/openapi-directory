import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestedServiceQuotaChange } from "./requestedservicequotachange";
export declare class ListRequestedServiceQuotaChangeHistoryResponse extends SpeakeasyBase {
    nextToken?: string;
    requestedQuotas?: RequestedServiceQuotaChange[];
}
