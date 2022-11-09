import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostStopDbInstanceAutomatedBackupsReplicationActionEnum {
    StopDbInstanceAutomatedBackupsReplication = "StopDBInstanceAutomatedBackupsReplication"
}
export declare enum PostStopDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostStopDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
    action: PostStopDbInstanceAutomatedBackupsReplicationActionEnum;
    version: PostStopDbInstanceAutomatedBackupsReplicationVersionEnum;
}
export declare class PostStopDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStopDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
    queryParams: PostStopDbInstanceAutomatedBackupsReplicationQueryParams;
    headers: PostStopDbInstanceAutomatedBackupsReplicationHeaders;
    request?: Uint8Array;
}
export declare class PostStopDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
