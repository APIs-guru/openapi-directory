import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbProxyEndpointActionEnum {
    DeleteDbProxyEndpoint = "DeleteDBProxyEndpoint"
}
export declare enum GetDeleteDbProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteDbProxyEndpointQueryParams extends SpeakeasyBase {
    action: GetDeleteDbProxyEndpointActionEnum;
    dbProxyEndpointName: string;
    version: GetDeleteDbProxyEndpointVersionEnum;
}
export declare class GetDeleteDbProxyEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbProxyEndpointRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbProxyEndpointQueryParams;
    headers: GetDeleteDbProxyEndpointHeaders;
}
export declare class GetDeleteDbProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
