import { SpeakeasyBase } from "../../../internal/utils";
import { RequestStatusEnum } from "./requeststatusenum";
/**
 * Information about a quota increase request.
**/
export declare class RequestedServiceQuotaChange extends SpeakeasyBase {
    caseId?: string;
    created?: Date;
    desiredValue?: number;
    globalQuota?: boolean;
    id?: string;
    lastUpdated?: Date;
    quotaArn?: string;
    quotaCode?: string;
    quotaName?: string;
    requester?: string;
    serviceCode?: string;
    serviceName?: string;
    status?: RequestStatusEnum;
    unit?: string;
}
