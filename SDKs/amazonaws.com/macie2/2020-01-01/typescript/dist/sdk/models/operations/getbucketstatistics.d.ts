import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBucketStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBucketStatisticsRequestBody extends SpeakeasyBase {
    accountId?: string;
}
export declare class GetBucketStatisticsRequest extends SpeakeasyBase {
    headers: GetBucketStatisticsHeaders;
    request: GetBucketStatisticsRequestBody;
}
export declare class GetBucketStatisticsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getBucketStatisticsResponse?: shared.GetBucketStatisticsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
