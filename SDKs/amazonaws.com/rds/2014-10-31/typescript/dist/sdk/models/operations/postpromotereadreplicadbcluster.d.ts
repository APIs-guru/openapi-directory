import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPromoteReadReplicaDbClusterActionEnum {
    PromoteReadReplicaDbCluster = "PromoteReadReplicaDBCluster"
}
export declare enum PostPromoteReadReplicaDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostPromoteReadReplicaDbClusterQueryParams extends SpeakeasyBase {
    action: PostPromoteReadReplicaDbClusterActionEnum;
    version: PostPromoteReadReplicaDbClusterVersionEnum;
}
export declare class PostPromoteReadReplicaDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPromoteReadReplicaDbClusterRequest extends SpeakeasyBase {
    queryParams: PostPromoteReadReplicaDbClusterQueryParams;
    headers: PostPromoteReadReplicaDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostPromoteReadReplicaDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
