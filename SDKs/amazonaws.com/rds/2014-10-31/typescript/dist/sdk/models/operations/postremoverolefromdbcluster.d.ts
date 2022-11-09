import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRemoveRoleFromDbClusterActionEnum {
    RemoveRoleFromDbCluster = "RemoveRoleFromDBCluster"
}
export declare enum PostRemoveRoleFromDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostRemoveRoleFromDbClusterQueryParams extends SpeakeasyBase {
    action: PostRemoveRoleFromDbClusterActionEnum;
    version: PostRemoveRoleFromDbClusterVersionEnum;
}
export declare class PostRemoveRoleFromDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveRoleFromDbClusterRequest extends SpeakeasyBase {
    queryParams: PostRemoveRoleFromDbClusterQueryParams;
    headers: PostRemoveRoleFromDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveRoleFromDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
