import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyDbInstanceActionEnum {
    ModifyDbInstance = "ModifyDBInstance"
}
export declare enum GetModifyDbInstanceVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class GetModifyDbInstanceQueryParams extends SpeakeasyBase {
    action: GetModifyDbInstanceActionEnum;
    allocatedStorage?: number;
    allowMajorVersionUpgrade?: boolean;
    applyImmediately?: boolean;
    autoMinorVersionUpgrade?: boolean;
    backupRetentionPeriod?: number;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbParameterGroupName?: string;
    dbSecurityGroups?: string[];
    engineVersion?: string;
    iops?: number;
    masterUserPassword?: string;
    multiAz?: boolean;
    newDbInstanceIdentifier?: string;
    optionGroupName?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    storageType?: string;
    tdeCredentialArn?: string;
    tdeCredentialPassword?: string;
    version: GetModifyDbInstanceVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetModifyDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetModifyDbInstanceQueryParams;
    headers: GetModifyDbInstanceHeaders;
}
export declare class GetModifyDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
