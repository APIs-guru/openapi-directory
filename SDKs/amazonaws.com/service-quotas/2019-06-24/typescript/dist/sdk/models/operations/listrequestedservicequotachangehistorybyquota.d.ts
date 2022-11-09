import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum {
    ServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuota = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota"
}
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum;
}
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaRequest extends SpeakeasyBase {
    queryParams: ListRequestedServiceQuotaChangeHistoryByQuotaQueryParams;
    headers: ListRequestedServiceQuotaChangeHistoryByQuotaHeaders;
    request: shared.ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
}
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    illegalArgumentException?: any;
    invalidPaginationTokenException?: any;
    listRequestedServiceQuotaChangeHistoryByQuotaResponse?: shared.ListRequestedServiceQuotaChangeHistoryByQuotaResponse;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
