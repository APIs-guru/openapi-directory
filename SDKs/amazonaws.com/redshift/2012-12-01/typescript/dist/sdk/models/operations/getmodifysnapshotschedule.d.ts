import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifySnapshotScheduleActionEnum {
    ModifySnapshotSchedule = "ModifySnapshotSchedule"
}
export declare enum GetModifySnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifySnapshotScheduleQueryParams extends SpeakeasyBase {
    action: GetModifySnapshotScheduleActionEnum;
    scheduleDefinitions: string[];
    scheduleIdentifier: string;
    version: GetModifySnapshotScheduleVersionEnum;
}
export declare class GetModifySnapshotScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifySnapshotScheduleRequest extends SpeakeasyBase {
    queryParams: GetModifySnapshotScheduleQueryParams;
    headers: GetModifySnapshotScheduleHeaders;
}
export declare class GetModifySnapshotScheduleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
