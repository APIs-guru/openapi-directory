import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchFacesXAmzTargetEnum {
    RekognitionServiceSearchFaces = "RekognitionService.SearchFaces"
}
export declare class SearchFacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchFacesXAmzTargetEnum;
}
export declare class SearchFacesRequest extends SpeakeasyBase {
    headers: SearchFacesHeaders;
    request: shared.SearchFacesRequest;
}
export declare class SearchFacesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    searchFacesResponse?: shared.SearchFacesResponse;
    statusCode: number;
    throttlingException?: any;
}
