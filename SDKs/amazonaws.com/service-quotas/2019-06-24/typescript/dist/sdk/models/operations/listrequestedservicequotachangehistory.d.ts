import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRequestedServiceQuotaChangeHistoryQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum {
    ServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory"
}
export declare class ListRequestedServiceQuotaChangeHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum;
}
export declare class ListRequestedServiceQuotaChangeHistoryRequest extends SpeakeasyBase {
    queryParams: ListRequestedServiceQuotaChangeHistoryQueryParams;
    headers: ListRequestedServiceQuotaChangeHistoryHeaders;
    request: shared.ListRequestedServiceQuotaChangeHistoryRequest;
}
export declare class ListRequestedServiceQuotaChangeHistoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    illegalArgumentException?: any;
    invalidPaginationTokenException?: any;
    listRequestedServiceQuotaChangeHistoryResponse?: shared.ListRequestedServiceQuotaChangeHistoryResponse;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
