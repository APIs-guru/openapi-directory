import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestedServiceQuotaChange } from "./requestedservicequotachange";
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaResponse extends SpeakeasyBase {
    nextToken?: string;
    requestedQuotas?: RequestedServiceQuotaChange[];
}
