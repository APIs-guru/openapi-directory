import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddTagsToResourceActionEnum {
    AddTagsToResource = "AddTagsToResource"
}
export declare enum PostAddTagsToResourceVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostAddTagsToResourceQueryParams extends SpeakeasyBase {
    action: PostAddTagsToResourceActionEnum;
    version: PostAddTagsToResourceVersionEnum;
}
export declare class PostAddTagsToResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddTagsToResourceRequest extends SpeakeasyBase {
    queryParams: PostAddTagsToResourceQueryParams;
    headers: PostAddTagsToResourceHeaders;
    request?: Uint8Array;
}
export declare class PostAddTagsToResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
