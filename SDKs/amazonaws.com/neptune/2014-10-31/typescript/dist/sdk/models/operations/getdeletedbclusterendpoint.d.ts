import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbClusterEndpointActionEnum {
    DeleteDbClusterEndpoint = "DeleteDBClusterEndpoint"
}
export declare enum GetDeleteDbClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteDbClusterEndpointQueryParams extends SpeakeasyBase {
    action: GetDeleteDbClusterEndpointActionEnum;
    dbClusterEndpointIdentifier: string;
    version: GetDeleteDbClusterEndpointVersionEnum;
}
export declare class GetDeleteDbClusterEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbClusterEndpointRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbClusterEndpointQueryParams;
    headers: GetDeleteDbClusterEndpointHeaders;
}
export declare class GetDeleteDbClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
