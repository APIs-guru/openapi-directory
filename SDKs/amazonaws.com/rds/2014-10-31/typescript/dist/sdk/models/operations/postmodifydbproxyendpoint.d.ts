import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyDbProxyEndpointActionEnum {
    ModifyDbProxyEndpoint = "ModifyDBProxyEndpoint"
}
export declare enum PostModifyDbProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbProxyEndpointQueryParams extends SpeakeasyBase {
    action: PostModifyDbProxyEndpointActionEnum;
    version: PostModifyDbProxyEndpointVersionEnum;
}
export declare class PostModifyDbProxyEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbProxyEndpointRequest extends SpeakeasyBase {
    queryParams: PostModifyDbProxyEndpointQueryParams;
    headers: PostModifyDbProxyEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
