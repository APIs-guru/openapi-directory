import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisableSnapshotCopyActionEnum {
    DisableSnapshotCopy = "DisableSnapshotCopy"
}
export declare enum GetDisableSnapshotCopyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDisableSnapshotCopyQueryParams extends SpeakeasyBase {
    action: GetDisableSnapshotCopyActionEnum;
    clusterIdentifier: string;
    version: GetDisableSnapshotCopyVersionEnum;
}
export declare class GetDisableSnapshotCopyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableSnapshotCopyRequest extends SpeakeasyBase {
    queryParams: GetDisableSnapshotCopyQueryParams;
    headers: GetDisableSnapshotCopyHeaders;
}
export declare class GetDisableSnapshotCopyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
