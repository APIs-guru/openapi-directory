import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContentModerationQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetContentModerationXAmzTargetEnum {
    RekognitionServiceGetContentModeration = "RekognitionService.GetContentModeration"
}
export declare class GetContentModerationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContentModerationXAmzTargetEnum;
}
export declare class GetContentModerationRequest extends SpeakeasyBase {
    queryParams: GetContentModerationQueryParams;
    headers: GetContentModerationHeaders;
    request: shared.GetContentModerationRequest;
}
export declare class GetContentModerationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getContentModerationResponse?: shared.GetContentModerationResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
