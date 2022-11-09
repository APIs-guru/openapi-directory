import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDbSnapshotActionEnum {
    CreateDbSnapshot = "CreateDBSnapshot"
}
export declare enum PostCreateDbSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostCreateDbSnapshotQueryParams extends SpeakeasyBase {
    action: PostCreateDbSnapshotActionEnum;
    version: PostCreateDbSnapshotVersionEnum;
}
export declare class PostCreateDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbSnapshotRequest extends SpeakeasyBase {
    queryParams: PostCreateDbSnapshotQueryParams;
    headers: PostCreateDbSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
