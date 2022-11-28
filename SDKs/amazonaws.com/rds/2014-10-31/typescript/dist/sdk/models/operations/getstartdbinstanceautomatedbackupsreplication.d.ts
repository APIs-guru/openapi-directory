import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetStartDbInstanceAutomatedBackupsReplicationActionEnum {
    StartDbInstanceAutomatedBackupsReplication = "StartDBInstanceAutomatedBackupsReplication"
}
export declare enum GetStartDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetStartDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
    action: GetStartDbInstanceAutomatedBackupsReplicationActionEnum;
    backupRetentionPeriod?: number;
    kmsKeyId?: string;
    preSignedUrl?: string;
    sourceDbInstanceArn: string;
    version: GetStartDbInstanceAutomatedBackupsReplicationVersionEnum;
}
export declare class GetStartDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStartDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
    queryParams: GetStartDbInstanceAutomatedBackupsReplicationQueryParams;
    headers: GetStartDbInstanceAutomatedBackupsReplicationHeaders;
}
export declare class GetStartDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
