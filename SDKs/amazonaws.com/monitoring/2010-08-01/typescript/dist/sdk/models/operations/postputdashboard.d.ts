import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPutDashboardActionEnum {
    PutDashboard = "PutDashboard"
}
export declare enum PostPutDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostPutDashboardQueryParams extends SpeakeasyBase {
    action: PostPutDashboardActionEnum;
    version: PostPutDashboardVersionEnum;
}
export declare class PostPutDashboardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutDashboardRequest extends SpeakeasyBase {
    queryParams: PostPutDashboardQueryParams;
    headers: PostPutDashboardHeaders;
    request?: Uint8Array;
}
export declare class PostPutDashboardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
