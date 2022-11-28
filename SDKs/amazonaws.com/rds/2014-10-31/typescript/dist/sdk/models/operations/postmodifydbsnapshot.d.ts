import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyDbSnapshotActionEnum {
    ModifyDbSnapshot = "ModifyDBSnapshot"
}
export declare enum PostModifyDbSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbSnapshotQueryParams extends SpeakeasyBase {
    action: PostModifyDbSnapshotActionEnum;
    version: PostModifyDbSnapshotVersionEnum;
}
export declare class PostModifyDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbSnapshotRequest extends SpeakeasyBase {
    queryParams: PostModifyDbSnapshotQueryParams;
    headers: PostModifyDbSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
