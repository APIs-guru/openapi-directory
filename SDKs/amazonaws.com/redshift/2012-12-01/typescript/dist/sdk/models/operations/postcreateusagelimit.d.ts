import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateUsageLimitActionEnum {
    CreateUsageLimit = "CreateUsageLimit"
}
export declare enum PostCreateUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateUsageLimitQueryParams extends SpeakeasyBase {
    action: PostCreateUsageLimitActionEnum;
    version: PostCreateUsageLimitVersionEnum;
}
export declare class PostCreateUsageLimitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateUsageLimitRequest extends SpeakeasyBase {
    queryParams: PostCreateUsageLimitQueryParams;
    headers: PostCreateUsageLimitHeaders;
    request?: Uint8Array;
}
export declare class PostCreateUsageLimitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
