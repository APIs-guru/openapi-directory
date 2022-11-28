import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteUsageLimitActionEnum {
    DeleteUsageLimit = "DeleteUsageLimit"
}
export declare enum PostDeleteUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteUsageLimitQueryParams extends SpeakeasyBase {
    action: PostDeleteUsageLimitActionEnum;
    version: PostDeleteUsageLimitVersionEnum;
}
export declare class PostDeleteUsageLimitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteUsageLimitRequest extends SpeakeasyBase {
    queryParams: PostDeleteUsageLimitQueryParams;
    headers: PostDeleteUsageLimitHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteUsageLimitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
