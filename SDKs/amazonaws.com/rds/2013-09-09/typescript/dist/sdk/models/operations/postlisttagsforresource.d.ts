import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListTagsForResourceActionEnum {
    ListTagsForResource = "ListTagsForResource"
}
export declare enum PostListTagsForResourceVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostListTagsForResourceQueryParams extends SpeakeasyBase {
    action: PostListTagsForResourceActionEnum;
    version: PostListTagsForResourceVersionEnum;
}
export declare class PostListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListTagsForResourceRequest extends SpeakeasyBase {
    queryParams: PostListTagsForResourceQueryParams;
    headers: PostListTagsForResourceHeaders;
    request?: Uint8Array;
}
export declare class PostListTagsForResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
