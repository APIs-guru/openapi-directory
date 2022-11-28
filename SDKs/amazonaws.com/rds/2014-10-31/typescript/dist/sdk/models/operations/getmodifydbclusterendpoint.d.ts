import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyDbClusterEndpointActionEnum {
    ModifyDbClusterEndpoint = "ModifyDBClusterEndpoint"
}
export declare enum GetModifyDbClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbClusterEndpointQueryParams extends SpeakeasyBase {
    action: GetModifyDbClusterEndpointActionEnum;
    dbClusterEndpointIdentifier: string;
    endpointType?: string;
    excludedMembers?: string[];
    staticMembers?: string[];
    version: GetModifyDbClusterEndpointVersionEnum;
}
export declare class GetModifyDbClusterEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbClusterEndpointRequest extends SpeakeasyBase {
    queryParams: GetModifyDbClusterEndpointQueryParams;
    headers: GetModifyDbClusterEndpointHeaders;
}
export declare class GetModifyDbClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
