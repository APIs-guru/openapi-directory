import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyUsageLimitActionEnum {
    ModifyUsageLimit = "ModifyUsageLimit"
}
export declare enum PostModifyUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyUsageLimitQueryParams extends SpeakeasyBase {
    action: PostModifyUsageLimitActionEnum;
    version: PostModifyUsageLimitVersionEnum;
}
export declare class PostModifyUsageLimitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyUsageLimitRequest extends SpeakeasyBase {
    queryParams: PostModifyUsageLimitQueryParams;
    headers: PostModifyUsageLimitHeaders;
    request?: Uint8Array;
}
export declare class PostModifyUsageLimitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
