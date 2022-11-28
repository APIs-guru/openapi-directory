import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateDbSnapshotActionEnum {
    CreateDbSnapshot = "CreateDBSnapshot"
}
export declare enum GetCreateDbSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetCreateDbSnapshotQueryParams extends SpeakeasyBase {
    action: GetCreateDbSnapshotActionEnum;
    dbInstanceIdentifier: string;
    dbSnapshotIdentifier: string;
    version: GetCreateDbSnapshotVersionEnum;
}
export declare class GetCreateDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateDbSnapshotRequest extends SpeakeasyBase {
    queryParams: GetCreateDbSnapshotQueryParams;
    headers: GetCreateDbSnapshotHeaders;
}
export declare class GetCreateDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
