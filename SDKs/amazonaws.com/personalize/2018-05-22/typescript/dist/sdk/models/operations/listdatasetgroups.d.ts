import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatasetGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDatasetGroupsXAmzTargetEnum {
    AmazonPersonalizeListDatasetGroups = "AmazonPersonalize.ListDatasetGroups"
}
export declare class ListDatasetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatasetGroupsXAmzTargetEnum;
}
export declare class ListDatasetGroupsRequest extends SpeakeasyBase {
    queryParams: ListDatasetGroupsQueryParams;
    headers: ListDatasetGroupsHeaders;
    request: shared.ListDatasetGroupsRequest;
}
export declare class ListDatasetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listDatasetGroupsResponse?: shared.ListDatasetGroupsResponse;
    statusCode: number;
}
