import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifySnapshotScheduleActionEnum {
    ModifySnapshotSchedule = "ModifySnapshotSchedule"
}
export declare enum PostModifySnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifySnapshotScheduleQueryParams extends SpeakeasyBase {
    action: PostModifySnapshotScheduleActionEnum;
    version: PostModifySnapshotScheduleVersionEnum;
}
export declare class PostModifySnapshotScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifySnapshotScheduleRequest extends SpeakeasyBase {
    queryParams: PostModifySnapshotScheduleQueryParams;
    headers: PostModifySnapshotScheduleHeaders;
    request?: Uint8Array;
}
export declare class PostModifySnapshotScheduleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
