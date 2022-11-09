import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAssociatedAssetsPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare enum ListAssociatedAssetsTraversalDirectionEnum {
    Parent = "PARENT",
    Child = "CHILD"
}
export declare class ListAssociatedAssetsQueryParams extends SpeakeasyBase {
    hierarchyId?: string;
    maxResults?: number;
    nextToken?: string;
    traversalDirection?: ListAssociatedAssetsTraversalDirectionEnum;
}
export declare class ListAssociatedAssetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssociatedAssetsRequest extends SpeakeasyBase {
    pathParams: ListAssociatedAssetsPathParams;
    queryParams: ListAssociatedAssetsQueryParams;
    headers: ListAssociatedAssetsHeaders;
}
export declare class ListAssociatedAssetsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAssociatedAssetsResponse?: shared.ListAssociatedAssetsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
