import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddRoleToDbClusterActionEnum {
    AddRoleToDbCluster = "AddRoleToDBCluster"
}
export declare enum PostAddRoleToDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostAddRoleToDbClusterQueryParams extends SpeakeasyBase {
    action: PostAddRoleToDbClusterActionEnum;
    version: PostAddRoleToDbClusterVersionEnum;
}
export declare class PostAddRoleToDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddRoleToDbClusterRequest extends SpeakeasyBase {
    queryParams: PostAddRoleToDbClusterQueryParams;
    headers: PostAddRoleToDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostAddRoleToDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
