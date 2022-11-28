import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLabelDetectionQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetLabelDetectionXAmzTargetEnum {
    RekognitionServiceGetLabelDetection = "RekognitionService.GetLabelDetection"
}
export declare class GetLabelDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLabelDetectionXAmzTargetEnum;
}
export declare class GetLabelDetectionRequest extends SpeakeasyBase {
    queryParams: GetLabelDetectionQueryParams;
    headers: GetLabelDetectionHeaders;
    request: shared.GetLabelDetectionRequest;
}
export declare class GetLabelDetectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getLabelDetectionResponse?: shared.GetLabelDetectionResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
