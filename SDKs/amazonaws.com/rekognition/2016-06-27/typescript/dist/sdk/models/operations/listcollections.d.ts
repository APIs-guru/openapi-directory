import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCollectionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCollectionsXAmzTargetEnum {
    RekognitionServiceListCollections = "RekognitionService.ListCollections"
}
export declare class ListCollectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCollectionsXAmzTargetEnum;
}
export declare class ListCollectionsRequest extends SpeakeasyBase {
    queryParams: ListCollectionsQueryParams;
    headers: ListCollectionsHeaders;
    request: shared.ListCollectionsRequest;
}
export declare class ListCollectionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    listCollectionsResponse?: shared.ListCollectionsResponse;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
