import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSegmentDetectionQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetSegmentDetectionXAmzTargetEnum {
    RekognitionServiceGetSegmentDetection = "RekognitionService.GetSegmentDetection"
}
export declare class GetSegmentDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSegmentDetectionXAmzTargetEnum;
}
export declare class GetSegmentDetectionRequest extends SpeakeasyBase {
    queryParams: GetSegmentDetectionQueryParams;
    headers: GetSegmentDetectionHeaders;
    request: shared.GetSegmentDetectionRequest;
}
export declare class GetSegmentDetectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getSegmentDetectionResponse?: shared.GetSegmentDetectionResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
