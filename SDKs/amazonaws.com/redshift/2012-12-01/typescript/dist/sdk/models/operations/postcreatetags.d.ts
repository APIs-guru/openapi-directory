import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateTagsActionEnum {
    CreateTags = "CreateTags"
}
export declare enum PostCreateTagsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateTagsQueryParams extends SpeakeasyBase {
    action: PostCreateTagsActionEnum;
    version: PostCreateTagsVersionEnum;
}
export declare class PostCreateTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTagsRequest extends SpeakeasyBase {
    queryParams: PostCreateTagsQueryParams;
    headers: PostCreateTagsHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
