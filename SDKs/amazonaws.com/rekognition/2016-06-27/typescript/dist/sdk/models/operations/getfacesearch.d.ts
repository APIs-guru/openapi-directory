import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFaceSearchQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetFaceSearchXAmzTargetEnum {
    RekognitionServiceGetFaceSearch = "RekognitionService.GetFaceSearch"
}
export declare class GetFaceSearchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFaceSearchXAmzTargetEnum;
}
export declare class GetFaceSearchRequest extends SpeakeasyBase {
    queryParams: GetFaceSearchQueryParams;
    headers: GetFaceSearchHeaders;
    request: shared.GetFaceSearchRequest;
}
export declare class GetFaceSearchResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getFaceSearchResponse?: shared.GetFaceSearchResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
