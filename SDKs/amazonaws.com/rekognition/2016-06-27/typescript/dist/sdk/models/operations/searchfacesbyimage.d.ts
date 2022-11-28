import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchFacesByImageXAmzTargetEnum {
    RekognitionServiceSearchFacesByImage = "RekognitionService.SearchFacesByImage"
}
export declare class SearchFacesByImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchFacesByImageXAmzTargetEnum;
}
export declare class SearchFacesByImageRequest extends SpeakeasyBase {
    headers: SearchFacesByImageHeaders;
    request: shared.SearchFacesByImageRequest;
}
export declare class SearchFacesByImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    imageTooLargeException?: any;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    searchFacesByImageResponse?: shared.SearchFacesByImageResponse;
    statusCode: number;
    throttlingException?: any;
}
