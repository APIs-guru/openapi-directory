import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyDbProxyEndpointActionEnum {
    ModifyDbProxyEndpoint = "ModifyDBProxyEndpoint"
}
export declare enum GetModifyDbProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbProxyEndpointQueryParams extends SpeakeasyBase {
    action: GetModifyDbProxyEndpointActionEnum;
    dbProxyEndpointName: string;
    newDbProxyEndpointName?: string;
    version: GetModifyDbProxyEndpointVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetModifyDbProxyEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbProxyEndpointRequest extends SpeakeasyBase {
    queryParams: GetModifyDbProxyEndpointQueryParams;
    headers: GetModifyDbProxyEndpointHeaders;
}
export declare class GetModifyDbProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
