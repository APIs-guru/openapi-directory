import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceQuotasQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListServiceQuotasXAmzTargetEnum {
    ServiceQuotasV20190624ListServiceQuotas = "ServiceQuotasV20190624.ListServiceQuotas"
}
export declare class ListServiceQuotasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceQuotasXAmzTargetEnum;
}
export declare class ListServiceQuotasRequest extends SpeakeasyBase {
    queryParams: ListServiceQuotasQueryParams;
    headers: ListServiceQuotasHeaders;
    request: shared.ListServiceQuotasRequest;
}
export declare class ListServiceQuotasResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    illegalArgumentException?: any;
    invalidPaginationTokenException?: any;
    listServiceQuotasResponse?: shared.ListServiceQuotasResponse;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
