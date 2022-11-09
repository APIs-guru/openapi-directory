import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAddRoleToDbClusterActionEnum {
    AddRoleToDbCluster = "AddRoleToDBCluster"
}
export declare enum GetAddRoleToDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetAddRoleToDbClusterQueryParams extends SpeakeasyBase {
    action: GetAddRoleToDbClusterActionEnum;
    dbClusterIdentifier: string;
    featureName?: string;
    roleArn: string;
    version: GetAddRoleToDbClusterVersionEnum;
}
export declare class GetAddRoleToDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAddRoleToDbClusterRequest extends SpeakeasyBase {
    queryParams: GetAddRoleToDbClusterQueryParams;
    headers: GetAddRoleToDbClusterHeaders;
}
export declare class GetAddRoleToDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
