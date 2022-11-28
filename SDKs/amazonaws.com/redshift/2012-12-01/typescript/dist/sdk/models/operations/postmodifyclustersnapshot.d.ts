import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyClusterSnapshotActionEnum {
    ModifyClusterSnapshot = "ModifyClusterSnapshot"
}
export declare enum PostModifyClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyClusterSnapshotQueryParams extends SpeakeasyBase {
    action: PostModifyClusterSnapshotActionEnum;
    version: PostModifyClusterSnapshotVersionEnum;
}
export declare class PostModifyClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: PostModifyClusterSnapshotQueryParams;
    headers: PostModifyClusterSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostModifyClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
