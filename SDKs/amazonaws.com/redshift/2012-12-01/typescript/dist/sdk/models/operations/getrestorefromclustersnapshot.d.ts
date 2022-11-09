import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRestoreFromClusterSnapshotActionEnum {
    RestoreFromClusterSnapshot = "RestoreFromClusterSnapshot"
}
export declare enum GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Auto = "auto"
}
export declare enum GetRestoreFromClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetRestoreFromClusterSnapshotQueryParams extends SpeakeasyBase {
    action: GetRestoreFromClusterSnapshotActionEnum;
    additionalInfo?: string;
    allowVersionUpgrade?: boolean;
    aquaConfigurationStatus?: GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum;
    automatedSnapshotRetentionPeriod?: number;
    availabilityZone?: string;
    availabilityZoneRelocation?: boolean;
    clusterIdentifier: string;
    clusterParameterGroupName?: string;
    clusterSecurityGroups?: string[];
    clusterSubnetGroupName?: string;
    elasticIp?: string;
    enhancedVpcRouting?: boolean;
    hsmClientCertificateIdentifier?: string;
    hsmConfigurationIdentifier?: string;
    iamRoles?: string[];
    kmsKeyId?: string;
    maintenanceTrackName?: string;
    manualSnapshotRetentionPeriod?: number;
    nodeType?: string;
    numberOfNodes?: number;
    ownerAccount?: string;
    port?: number;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    snapshotClusterIdentifier?: string;
    snapshotIdentifier: string;
    snapshotScheduleIdentifier?: string;
    version: GetRestoreFromClusterSnapshotVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetRestoreFromClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRestoreFromClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: GetRestoreFromClusterSnapshotQueryParams;
    headers: GetRestoreFromClusterSnapshotHeaders;
}
export declare class GetRestoreFromClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
