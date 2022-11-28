import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRevokeSnapshotAccessActionEnum {
    RevokeSnapshotAccess = "RevokeSnapshotAccess"
}
export declare enum GetRevokeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetRevokeSnapshotAccessQueryParams extends SpeakeasyBase {
    accountWithRestoreAccess: string;
    action: GetRevokeSnapshotAccessActionEnum;
    snapshotClusterIdentifier?: string;
    snapshotIdentifier: string;
    version: GetRevokeSnapshotAccessVersionEnum;
}
export declare class GetRevokeSnapshotAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRevokeSnapshotAccessRequest extends SpeakeasyBase {
    queryParams: GetRevokeSnapshotAccessQueryParams;
    headers: GetRevokeSnapshotAccessHeaders;
}
export declare class GetRevokeSnapshotAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
