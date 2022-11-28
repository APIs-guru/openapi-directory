import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSnapshotCopyGrantActionEnum {
    DeleteSnapshotCopyGrant = "DeleteSnapshotCopyGrant"
}
export declare enum GetDeleteSnapshotCopyGrantVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteSnapshotCopyGrantQueryParams extends SpeakeasyBase {
    action: GetDeleteSnapshotCopyGrantActionEnum;
    snapshotCopyGrantName: string;
    version: GetDeleteSnapshotCopyGrantVersionEnum;
}
export declare class GetDeleteSnapshotCopyGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSnapshotCopyGrantRequest extends SpeakeasyBase {
    queryParams: GetDeleteSnapshotCopyGrantQueryParams;
    headers: GetDeleteSnapshotCopyGrantHeaders;
}
export declare class GetDeleteSnapshotCopyGrantResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
