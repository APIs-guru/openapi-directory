import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssociatedResourcesPathParams extends SpeakeasyBase {
    application: string;
}
export declare class ListAssociatedResourcesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAssociatedResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssociatedResourcesRequest extends SpeakeasyBase {
    pathParams: ListAssociatedResourcesPathParams;
    queryParams: ListAssociatedResourcesQueryParams;
    headers: ListAssociatedResourcesHeaders;
}
export declare class ListAssociatedResourcesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listAssociatedResourcesResponse?: shared.ListAssociatedResourcesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
