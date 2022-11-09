import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStopDbInstanceAutomatedBackupsReplicationActionEnum {
    StopDbInstanceAutomatedBackupsReplication = "StopDBInstanceAutomatedBackupsReplication"
}
export declare enum GetStopDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetStopDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
    action: GetStopDbInstanceAutomatedBackupsReplicationActionEnum;
    sourceDbInstanceArn: string;
    version: GetStopDbInstanceAutomatedBackupsReplicationVersionEnum;
}
export declare class GetStopDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStopDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
    queryParams: GetStopDbInstanceAutomatedBackupsReplicationQueryParams;
    headers: GetStopDbInstanceAutomatedBackupsReplicationHeaders;
}
export declare class GetStopDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
