import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSnapshotScheduleActionEnum {
    DeleteSnapshotSchedule = "DeleteSnapshotSchedule"
}
export declare enum GetDeleteSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteSnapshotScheduleQueryParams extends SpeakeasyBase {
    action: GetDeleteSnapshotScheduleActionEnum;
    scheduleIdentifier: string;
    version: GetDeleteSnapshotScheduleVersionEnum;
}
export declare class GetDeleteSnapshotScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSnapshotScheduleRequest extends SpeakeasyBase {
    queryParams: GetDeleteSnapshotScheduleQueryParams;
    headers: GetDeleteSnapshotScheduleHeaders;
}
export declare class GetDeleteSnapshotScheduleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
