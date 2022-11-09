import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostStartDbInstanceAutomatedBackupsReplicationActionEnum {
    StartDbInstanceAutomatedBackupsReplication = "StartDBInstanceAutomatedBackupsReplication"
}
export declare enum PostStartDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostStartDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
    action: PostStartDbInstanceAutomatedBackupsReplicationActionEnum;
    version: PostStartDbInstanceAutomatedBackupsReplicationVersionEnum;
}
export declare class PostStartDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
    queryParams: PostStartDbInstanceAutomatedBackupsReplicationQueryParams;
    headers: PostStartDbInstanceAutomatedBackupsReplicationHeaders;
    request?: Uint8Array;
}
export declare class PostStartDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
