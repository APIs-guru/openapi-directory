import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteDashboardsActionEnum {
    DeleteDashboards = "DeleteDashboards"
}
export declare enum PostDeleteDashboardsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDeleteDashboardsQueryParams extends SpeakeasyBase {
    action: PostDeleteDashboardsActionEnum;
    version: PostDeleteDashboardsVersionEnum;
}
export declare class PostDeleteDashboardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDashboardsRequest extends SpeakeasyBase {
    queryParams: PostDeleteDashboardsQueryParams;
    headers: PostDeleteDashboardsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDashboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
