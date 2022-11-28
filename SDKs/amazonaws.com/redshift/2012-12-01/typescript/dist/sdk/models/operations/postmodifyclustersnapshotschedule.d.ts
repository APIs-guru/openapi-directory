import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyClusterSnapshotScheduleActionEnum {
    ModifyClusterSnapshotSchedule = "ModifyClusterSnapshotSchedule"
}
export declare enum PostModifyClusterSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyClusterSnapshotScheduleQueryParams extends SpeakeasyBase {
    action: PostModifyClusterSnapshotScheduleActionEnum;
    version: PostModifyClusterSnapshotScheduleVersionEnum;
}
export declare class PostModifyClusterSnapshotScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyClusterSnapshotScheduleRequest extends SpeakeasyBase {
    queryParams: PostModifyClusterSnapshotScheduleQueryParams;
    headers: PostModifyClusterSnapshotScheduleHeaders;
    request?: Uint8Array;
}
export declare class PostModifyClusterSnapshotScheduleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
