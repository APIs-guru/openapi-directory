import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRebootClusterActionEnum {
    RebootCluster = "RebootCluster"
}
export declare enum GetRebootClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetRebootClusterQueryParams extends SpeakeasyBase {
    action: GetRebootClusterActionEnum;
    clusterIdentifier: string;
    version: GetRebootClusterVersionEnum;
}
export declare class GetRebootClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRebootClusterRequest extends SpeakeasyBase {
    queryParams: GetRebootClusterQueryParams;
    headers: GetRebootClusterHeaders;
}
export declare class GetRebootClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
