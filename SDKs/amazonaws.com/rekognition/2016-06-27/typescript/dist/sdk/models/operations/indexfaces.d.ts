import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IndexFacesXAmzTargetEnum {
    RekognitionServiceIndexFaces = "RekognitionService.IndexFaces"
}
export declare class IndexFacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IndexFacesXAmzTargetEnum;
}
export declare class IndexFacesRequest extends SpeakeasyBase {
    headers: IndexFacesHeaders;
    request: shared.IndexFacesRequest;
}
export declare class IndexFacesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    imageTooLargeException?: any;
    indexFacesResponse?: shared.IndexFacesResponse;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
