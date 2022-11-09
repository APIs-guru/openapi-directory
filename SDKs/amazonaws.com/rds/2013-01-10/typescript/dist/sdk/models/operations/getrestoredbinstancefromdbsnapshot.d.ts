import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRestoreDbInstanceFromDbSnapshotActionEnum {
    RestoreDbInstanceFromDbSnapshot = "RestoreDBInstanceFromDBSnapshot"
}
export declare enum GetRestoreDbInstanceFromDbSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetRestoreDbInstanceFromDbSnapshotQueryParams extends SpeakeasyBase {
    action: GetRestoreDbInstanceFromDbSnapshotActionEnum;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbName?: string;
    dbSnapshotIdentifier: string;
    dbSubnetGroupName?: string;
    engine?: string;
    iops?: number;
    licenseModel?: string;
    multiAz?: boolean;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    version: GetRestoreDbInstanceFromDbSnapshotVersionEnum;
}
export declare class GetRestoreDbInstanceFromDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRestoreDbInstanceFromDbSnapshotRequest extends SpeakeasyBase {
    queryParams: GetRestoreDbInstanceFromDbSnapshotQueryParams;
    headers: GetRestoreDbInstanceFromDbSnapshotHeaders;
}
export declare class GetRestoreDbInstanceFromDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
