import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssetRelationshipsPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare enum ListAssetRelationshipsTraversalTypeEnum {
    PathToRoot = "PATH_TO_ROOT"
}
export declare class ListAssetRelationshipsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    traversalType: ListAssetRelationshipsTraversalTypeEnum;
}
export declare class ListAssetRelationshipsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssetRelationshipsRequest extends SpeakeasyBase {
    pathParams: ListAssetRelationshipsPathParams;
    queryParams: ListAssetRelationshipsQueryParams;
    headers: ListAssetRelationshipsHeaders;
}
export declare class ListAssetRelationshipsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAssetRelationshipsResponse?: shared.ListAssetRelationshipsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
