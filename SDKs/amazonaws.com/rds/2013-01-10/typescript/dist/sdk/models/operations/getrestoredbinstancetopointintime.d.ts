import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRestoreDbInstanceToPointInTimeActionEnum {
    RestoreDbInstanceToPointInTime = "RestoreDBInstanceToPointInTime"
}
export declare enum GetRestoreDbInstanceToPointInTimeVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetRestoreDbInstanceToPointInTimeQueryParams extends SpeakeasyBase {
    action: GetRestoreDbInstanceToPointInTimeActionEnum;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbName?: string;
    dbSubnetGroupName?: string;
    engine?: string;
    iops?: number;
    licenseModel?: string;
    multiAz?: boolean;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    restoreTime?: Date;
    sourceDbInstanceIdentifier: string;
    targetDbInstanceIdentifier: string;
    useLatestRestorableTime?: boolean;
    version: GetRestoreDbInstanceToPointInTimeVersionEnum;
}
export declare class GetRestoreDbInstanceToPointInTimeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRestoreDbInstanceToPointInTimeRequest extends SpeakeasyBase {
    queryParams: GetRestoreDbInstanceToPointInTimeQueryParams;
    headers: GetRestoreDbInstanceToPointInTimeHeaders;
}
export declare class GetRestoreDbInstanceToPointInTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
