import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListNamespacesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListNamespacesXAmzTargetEnum {
    Route53AutoNamingV20170314ListNamespaces = "Route53AutoNaming_v20170314.ListNamespaces"
}
export declare class ListNamespacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNamespacesXAmzTargetEnum;
}
export declare class ListNamespacesRequest extends SpeakeasyBase {
    queryParams: ListNamespacesQueryParams;
    headers: ListNamespacesHeaders;
    request: shared.ListNamespacesRequest;
}
export declare class ListNamespacesResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    listNamespacesResponse?: shared.ListNamespacesResponse;
    statusCode: number;
}
