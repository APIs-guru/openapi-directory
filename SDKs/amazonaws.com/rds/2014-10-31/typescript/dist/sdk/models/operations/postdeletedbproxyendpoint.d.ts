import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteDbProxyEndpointActionEnum {
    DeleteDbProxyEndpoint = "DeleteDBProxyEndpoint"
}
export declare enum PostDeleteDbProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteDbProxyEndpointQueryParams extends SpeakeasyBase {
    action: PostDeleteDbProxyEndpointActionEnum;
    version: PostDeleteDbProxyEndpointVersionEnum;
}
export declare class PostDeleteDbProxyEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbProxyEndpointRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbProxyEndpointQueryParams;
    headers: PostDeleteDbProxyEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
