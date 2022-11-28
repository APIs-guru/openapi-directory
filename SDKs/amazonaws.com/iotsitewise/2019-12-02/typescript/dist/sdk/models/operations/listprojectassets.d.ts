import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProjectAssetsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class ListProjectAssetsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListProjectAssetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProjectAssetsRequest extends SpeakeasyBase {
    pathParams: ListProjectAssetsPathParams;
    queryParams: ListProjectAssetsQueryParams;
    headers: ListProjectAssetsHeaders;
}
export declare class ListProjectAssetsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listProjectAssetsResponse?: shared.ListProjectAssetsResponse;
    statusCode: number;
    throttlingException?: any;
}
