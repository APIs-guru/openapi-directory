import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTextDetectionQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetTextDetectionXAmzTargetEnum {
    RekognitionServiceGetTextDetection = "RekognitionService.GetTextDetection"
}
export declare class GetTextDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTextDetectionXAmzTargetEnum;
}
export declare class GetTextDetectionRequest extends SpeakeasyBase {
    queryParams: GetTextDetectionQueryParams;
    headers: GetTextDetectionHeaders;
    request: shared.GetTextDetectionRequest;
}
export declare class GetTextDetectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getTextDetectionResponse?: shared.GetTextDetectionResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
