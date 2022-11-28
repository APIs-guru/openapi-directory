import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteSnapshotScheduleActionEnum {
    DeleteSnapshotSchedule = "DeleteSnapshotSchedule"
}
export declare enum PostDeleteSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteSnapshotScheduleQueryParams extends SpeakeasyBase {
    action: PostDeleteSnapshotScheduleActionEnum;
    version: PostDeleteSnapshotScheduleVersionEnum;
}
export declare class PostDeleteSnapshotScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSnapshotScheduleRequest extends SpeakeasyBase {
    queryParams: PostDeleteSnapshotScheduleQueryParams;
    headers: PostDeleteSnapshotScheduleHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSnapshotScheduleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
