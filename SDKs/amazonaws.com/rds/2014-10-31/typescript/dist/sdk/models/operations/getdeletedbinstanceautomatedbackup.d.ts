import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteDbInstanceAutomatedBackupActionEnum {
    DeleteDbInstanceAutomatedBackup = "DeleteDBInstanceAutomatedBackup"
}
export declare enum GetDeleteDbInstanceAutomatedBackupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteDbInstanceAutomatedBackupQueryParams extends SpeakeasyBase {
    action: GetDeleteDbInstanceAutomatedBackupActionEnum;
    dbInstanceAutomatedBackupsArn?: string;
    dbiResourceId?: string;
    version: GetDeleteDbInstanceAutomatedBackupVersionEnum;
}
export declare class GetDeleteDbInstanceAutomatedBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbInstanceAutomatedBackupRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbInstanceAutomatedBackupQueryParams;
    headers: GetDeleteDbInstanceAutomatedBackupHeaders;
}
export declare class GetDeleteDbInstanceAutomatedBackupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
