import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateDbInstanceReadReplicaActionEnum {
    CreateDbInstanceReadReplica = "CreateDBInstanceReadReplica"
}
export declare enum GetCreateDbInstanceReadReplicaVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetCreateDbInstanceReadReplicaQueryParams extends SpeakeasyBase {
    action: GetCreateDbInstanceReadReplicaActionEnum;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    iops?: number;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    sourceDbInstanceIdentifier: string;
    version: GetCreateDbInstanceReadReplicaVersionEnum;
}
export declare class GetCreateDbInstanceReadReplicaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateDbInstanceReadReplicaRequest extends SpeakeasyBase {
    queryParams: GetCreateDbInstanceReadReplicaQueryParams;
    headers: GetCreateDbInstanceReadReplicaHeaders;
}
export declare class GetCreateDbInstanceReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
