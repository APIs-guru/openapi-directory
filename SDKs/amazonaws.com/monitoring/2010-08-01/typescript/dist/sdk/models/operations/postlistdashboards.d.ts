import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListDashboardsActionEnum {
    ListDashboards = "ListDashboards"
}
export declare enum PostListDashboardsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostListDashboardsQueryParams extends SpeakeasyBase {
    action: PostListDashboardsActionEnum;
    nextToken?: string;
    version: PostListDashboardsVersionEnum;
}
export declare class PostListDashboardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListDashboardsRequest extends SpeakeasyBase {
    queryParams: PostListDashboardsQueryParams;
    headers: PostListDashboardsHeaders;
    request?: Uint8Array;
}
export declare class PostListDashboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
