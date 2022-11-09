import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDbProxyEndpointActionEnum {
    CreateDbProxyEndpoint = "CreateDBProxyEndpoint"
}
export declare enum PostCreateDbProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateDbProxyEndpointQueryParams extends SpeakeasyBase {
    action: PostCreateDbProxyEndpointActionEnum;
    version: PostCreateDbProxyEndpointVersionEnum;
}
export declare class PostCreateDbProxyEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbProxyEndpointRequest extends SpeakeasyBase {
    queryParams: PostCreateDbProxyEndpointQueryParams;
    headers: PostCreateDbProxyEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
