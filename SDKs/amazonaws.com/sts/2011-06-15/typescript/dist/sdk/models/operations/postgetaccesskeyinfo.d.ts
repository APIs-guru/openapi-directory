import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetAccessKeyInfoActionEnum {
    GetAccessKeyInfo = "GetAccessKeyInfo"
}
export declare enum PostGetAccessKeyInfoVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class PostGetAccessKeyInfoQueryParams extends SpeakeasyBase {
    action: PostGetAccessKeyInfoActionEnum;
    version: PostGetAccessKeyInfoVersionEnum;
}
export declare class PostGetAccessKeyInfoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetAccessKeyInfoRequest extends SpeakeasyBase {
    queryParams: PostGetAccessKeyInfoQueryParams;
    headers: PostGetAccessKeyInfoHeaders;
    request?: Uint8Array;
}
export declare class PostGetAccessKeyInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
