import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbSnapshotActionEnum {
    DeleteDbSnapshot = "DeleteDBSnapshot"
}
export declare enum GetDeleteDbSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDeleteDbSnapshotQueryParams extends SpeakeasyBase {
    action: GetDeleteDbSnapshotActionEnum;
    dbSnapshotIdentifier: string;
    version: GetDeleteDbSnapshotVersionEnum;
}
export declare class GetDeleteDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbSnapshotRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbSnapshotQueryParams;
    headers: GetDeleteDbSnapshotHeaders;
}
export declare class GetDeleteDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
