import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFeatureGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFeatureGroupsXAmzTargetEnum {
    SageMakerListFeatureGroups = "SageMaker.ListFeatureGroups"
}
export declare class ListFeatureGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFeatureGroupsXAmzTargetEnum;
}
export declare class ListFeatureGroupsRequest extends SpeakeasyBase {
    queryParams: ListFeatureGroupsQueryParams;
    headers: ListFeatureGroupsHeaders;
    request: shared.ListFeatureGroupsRequest;
}
export declare class ListFeatureGroupsResponse extends SpeakeasyBase {
    contentType: string;
    listFeatureGroupsResponse?: shared.ListFeatureGroupsResponse;
    statusCode: number;
}
