import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyClusterActionEnum {
    ModifyCluster = "ModifyCluster"
}
export declare enum GetModifyClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyClusterQueryParams extends SpeakeasyBase {
    action: GetModifyClusterActionEnum;
    allowVersionUpgrade?: boolean;
    automatedSnapshotRetentionPeriod?: number;
    availabilityZone?: string;
    availabilityZoneRelocation?: boolean;
    clusterIdentifier: string;
    clusterParameterGroupName?: string;
    clusterSecurityGroups?: string[];
    clusterType?: string;
    clusterVersion?: string;
    elasticIp?: string;
    encrypted?: boolean;
    enhancedVpcRouting?: boolean;
    hsmClientCertificateIdentifier?: string;
    hsmConfigurationIdentifier?: string;
    kmsKeyId?: string;
    maintenanceTrackName?: string;
    manualSnapshotRetentionPeriod?: number;
    masterUserPassword?: string;
    newClusterIdentifier?: string;
    nodeType?: string;
    numberOfNodes?: number;
    port?: number;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    version: GetModifyClusterVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetModifyClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyClusterRequest extends SpeakeasyBase {
    queryParams: GetModifyClusterQueryParams;
    headers: GetModifyClusterHeaders;
}
export declare class GetModifyClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
