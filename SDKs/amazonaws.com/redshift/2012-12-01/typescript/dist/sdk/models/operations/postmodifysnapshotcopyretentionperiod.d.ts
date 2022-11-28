import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifySnapshotCopyRetentionPeriodActionEnum {
    ModifySnapshotCopyRetentionPeriod = "ModifySnapshotCopyRetentionPeriod"
}
export declare enum PostModifySnapshotCopyRetentionPeriodVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifySnapshotCopyRetentionPeriodQueryParams extends SpeakeasyBase {
    action: PostModifySnapshotCopyRetentionPeriodActionEnum;
    version: PostModifySnapshotCopyRetentionPeriodVersionEnum;
}
export declare class PostModifySnapshotCopyRetentionPeriodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifySnapshotCopyRetentionPeriodRequest extends SpeakeasyBase {
    queryParams: PostModifySnapshotCopyRetentionPeriodQueryParams;
    headers: PostModifySnapshotCopyRetentionPeriodHeaders;
    request?: Uint8Array;
}
export declare class PostModifySnapshotCopyRetentionPeriodResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
