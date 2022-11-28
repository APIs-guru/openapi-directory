import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectFacesXAmzTargetEnum {
    RekognitionServiceDetectFaces = "RekognitionService.DetectFaces"
}
export declare class DetectFacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectFacesXAmzTargetEnum;
}
export declare class DetectFacesRequest extends SpeakeasyBase {
    headers: DetectFacesHeaders;
    request: shared.DetectFacesRequest;
}
export declare class DetectFacesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    detectFacesResponse?: shared.DetectFacesResponse;
    imageTooLargeException?: any;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
