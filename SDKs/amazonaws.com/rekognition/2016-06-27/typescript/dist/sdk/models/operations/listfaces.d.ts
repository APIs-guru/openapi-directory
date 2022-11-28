import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFacesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFacesXAmzTargetEnum {
    RekognitionServiceListFaces = "RekognitionService.ListFaces"
}
export declare class ListFacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFacesXAmzTargetEnum;
}
export declare class ListFacesRequest extends SpeakeasyBase {
    queryParams: ListFacesQueryParams;
    headers: ListFacesHeaders;
    request: shared.ListFacesRequest;
}
export declare class ListFacesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    listFacesResponse?: shared.ListFacesResponse;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
