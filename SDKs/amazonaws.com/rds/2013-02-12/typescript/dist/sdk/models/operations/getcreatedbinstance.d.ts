import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateDbInstanceActionEnum {
    CreateDbInstance = "CreateDBInstance"
}
export declare enum GetCreateDbInstanceVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetCreateDbInstanceQueryParams extends SpeakeasyBase {
    action: GetCreateDbInstanceActionEnum;
    allocatedStorage: number;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    backupRetentionPeriod?: number;
    characterSetName?: string;
    dbInstanceClass: string;
    dbInstanceIdentifier: string;
    dbName?: string;
    dbParameterGroupName?: string;
    dbSecurityGroups?: string[];
    dbSubnetGroupName?: string;
    engine: string;
    engineVersion?: string;
    iops?: number;
    licenseModel?: string;
    masterUserPassword: string;
    masterUsername: string;
    multiAz?: boolean;
    optionGroupName?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    version: GetCreateDbInstanceVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetCreateDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetCreateDbInstanceQueryParams;
    headers: GetCreateDbInstanceHeaders;
}
export declare class GetCreateDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
