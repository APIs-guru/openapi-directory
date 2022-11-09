import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCopyDbSnapshotActionEnum {
    CopyDbSnapshot = "CopyDBSnapshot"
}
export declare enum GetCopyDbSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetCopyDbSnapshotQueryParams extends SpeakeasyBase {
    action: GetCopyDbSnapshotActionEnum;
    sourceDbSnapshotIdentifier: string;
    targetDbSnapshotIdentifier: string;
    version: GetCopyDbSnapshotVersionEnum;
}
export declare class GetCopyDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCopyDbSnapshotRequest extends SpeakeasyBase {
    queryParams: GetCopyDbSnapshotQueryParams;
    headers: GetCopyDbSnapshotHeaders;
}
export declare class GetCopyDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
