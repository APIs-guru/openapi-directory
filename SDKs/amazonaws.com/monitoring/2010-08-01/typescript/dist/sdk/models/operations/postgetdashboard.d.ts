import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetDashboardActionEnum {
    GetDashboard = "GetDashboard"
}
export declare enum PostGetDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostGetDashboardQueryParams extends SpeakeasyBase {
    action: PostGetDashboardActionEnum;
    version: PostGetDashboardVersionEnum;
}
export declare class PostGetDashboardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetDashboardRequest extends SpeakeasyBase {
    queryParams: PostGetDashboardQueryParams;
    headers: PostGetDashboardHeaders;
    request?: Uint8Array;
}
export declare class PostGetDashboardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
