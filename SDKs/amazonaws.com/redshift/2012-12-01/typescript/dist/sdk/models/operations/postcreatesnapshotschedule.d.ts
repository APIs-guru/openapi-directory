import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateSnapshotScheduleActionEnum {
    CreateSnapshotSchedule = "CreateSnapshotSchedule"
}
export declare enum PostCreateSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateSnapshotScheduleQueryParams extends SpeakeasyBase {
    action: PostCreateSnapshotScheduleActionEnum;
    version: PostCreateSnapshotScheduleVersionEnum;
}
export declare class PostCreateSnapshotScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateSnapshotScheduleRequest extends SpeakeasyBase {
    queryParams: PostCreateSnapshotScheduleQueryParams;
    headers: PostCreateSnapshotScheduleHeaders;
    request?: Uint8Array;
}
export declare class PostCreateSnapshotScheduleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
