import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CompareFacesXAmzTargetEnum {
    RekognitionServiceCompareFaces = "RekognitionService.CompareFaces"
}
export declare class CompareFacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CompareFacesXAmzTargetEnum;
}
export declare class CompareFacesRequest extends SpeakeasyBase {
    headers: CompareFacesHeaders;
    request: shared.CompareFacesRequest;
}
export declare class CompareFacesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    compareFacesResponse?: shared.CompareFacesResponse;
    contentType: string;
    imageTooLargeException?: any;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
