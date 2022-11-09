import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteDbInstanceAutomatedBackupActionEnum {
    DeleteDbInstanceAutomatedBackup = "DeleteDBInstanceAutomatedBackup"
}
export declare enum PostDeleteDbInstanceAutomatedBackupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteDbInstanceAutomatedBackupQueryParams extends SpeakeasyBase {
    action: PostDeleteDbInstanceAutomatedBackupActionEnum;
    version: PostDeleteDbInstanceAutomatedBackupVersionEnum;
}
export declare class PostDeleteDbInstanceAutomatedBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbInstanceAutomatedBackupRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbInstanceAutomatedBackupQueryParams;
    headers: PostDeleteDbInstanceAutomatedBackupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbInstanceAutomatedBackupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
