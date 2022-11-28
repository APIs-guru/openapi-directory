import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRestoreDbInstanceFromDbSnapshotActionEnum {
    RestoreDbInstanceFromDbSnapshot = "RestoreDBInstanceFromDBSnapshot"
}
export declare enum PostRestoreDbInstanceFromDbSnapshotVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostRestoreDbInstanceFromDbSnapshotQueryParams extends SpeakeasyBase {
    action: PostRestoreDbInstanceFromDbSnapshotActionEnum;
    version: PostRestoreDbInstanceFromDbSnapshotVersionEnum;
}
export declare class PostRestoreDbInstanceFromDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreDbInstanceFromDbSnapshotRequest extends SpeakeasyBase {
    queryParams: PostRestoreDbInstanceFromDbSnapshotQueryParams;
    headers: PostRestoreDbInstanceFromDbSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostRestoreDbInstanceFromDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
