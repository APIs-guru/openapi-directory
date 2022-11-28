import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPromoteReadReplicaDbClusterActionEnum {
    PromoteReadReplicaDbCluster = "PromoteReadReplicaDBCluster"
}
export declare enum GetPromoteReadReplicaDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetPromoteReadReplicaDbClusterQueryParams extends SpeakeasyBase {
    action: GetPromoteReadReplicaDbClusterActionEnum;
    dbClusterIdentifier: string;
    version: GetPromoteReadReplicaDbClusterVersionEnum;
}
export declare class GetPromoteReadReplicaDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPromoteReadReplicaDbClusterRequest extends SpeakeasyBase {
    queryParams: GetPromoteReadReplicaDbClusterQueryParams;
    headers: GetPromoteReadReplicaDbClusterHeaders;
}
export declare class GetPromoteReadReplicaDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
