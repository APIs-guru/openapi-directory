import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTagResourceActionEnum {
    TagResource = "TagResource"
}
export declare enum PostTagResourceVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostTagResourceQueryParams extends SpeakeasyBase {
    action: PostTagResourceActionEnum;
    version: PostTagResourceVersionEnum;
}
export declare class PostTagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagResourceRequest extends SpeakeasyBase {
    queryParams: PostTagResourceQueryParams;
    headers: PostTagResourceHeaders;
    request?: Uint8Array;
}
export declare class PostTagResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
