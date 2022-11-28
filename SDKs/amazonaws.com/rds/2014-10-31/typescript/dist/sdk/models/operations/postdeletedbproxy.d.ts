import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteDbProxyActionEnum {
    DeleteDbProxy = "DeleteDBProxy"
}
export declare enum PostDeleteDbProxyVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteDbProxyQueryParams extends SpeakeasyBase {
    action: PostDeleteDbProxyActionEnum;
    version: PostDeleteDbProxyVersionEnum;
}
export declare class PostDeleteDbProxyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbProxyRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbProxyQueryParams;
    headers: PostDeleteDbProxyHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbProxyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
