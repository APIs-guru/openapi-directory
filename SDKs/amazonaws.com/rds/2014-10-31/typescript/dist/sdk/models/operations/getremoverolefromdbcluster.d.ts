import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRemoveRoleFromDbClusterActionEnum {
    RemoveRoleFromDbCluster = "RemoveRoleFromDBCluster"
}
export declare enum GetRemoveRoleFromDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetRemoveRoleFromDbClusterQueryParams extends SpeakeasyBase {
    action: GetRemoveRoleFromDbClusterActionEnum;
    dbClusterIdentifier: string;
    featureName?: string;
    roleArn: string;
    version: GetRemoveRoleFromDbClusterVersionEnum;
}
export declare class GetRemoveRoleFromDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemoveRoleFromDbClusterRequest extends SpeakeasyBase {
    queryParams: GetRemoveRoleFromDbClusterQueryParams;
    headers: GetRemoveRoleFromDbClusterHeaders;
}
export declare class GetRemoveRoleFromDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
