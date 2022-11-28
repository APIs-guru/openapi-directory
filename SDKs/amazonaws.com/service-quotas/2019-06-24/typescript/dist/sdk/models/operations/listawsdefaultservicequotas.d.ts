import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAwsDefaultServiceQuotasQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAwsDefaultServiceQuotasXAmzTargetEnum {
    ServiceQuotasV20190624ListAwsDefaultServiceQuotas = "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas"
}
export declare class ListAwsDefaultServiceQuotasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAwsDefaultServiceQuotasXAmzTargetEnum;
}
export declare class ListAwsDefaultServiceQuotasRequest extends SpeakeasyBase {
    queryParams: ListAwsDefaultServiceQuotasQueryParams;
    headers: ListAwsDefaultServiceQuotasHeaders;
    request: shared.ListAwsDefaultServiceQuotasRequest;
}
export declare class ListAwsDefaultServiceQuotasResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    illegalArgumentException?: any;
    invalidPaginationTokenException?: any;
    listAwsDefaultServiceQuotasResponse?: shared.ListAwsDefaultServiceQuotasResponse;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
