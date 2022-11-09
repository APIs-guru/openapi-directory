import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyClusterSnapshotScheduleActionEnum {
    ModifyClusterSnapshotSchedule = "ModifyClusterSnapshotSchedule"
}
export declare enum GetModifyClusterSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyClusterSnapshotScheduleQueryParams extends SpeakeasyBase {
    action: GetModifyClusterSnapshotScheduleActionEnum;
    clusterIdentifier: string;
    disassociateSchedule?: boolean;
    scheduleIdentifier?: string;
    version: GetModifyClusterSnapshotScheduleVersionEnum;
}
export declare class GetModifyClusterSnapshotScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyClusterSnapshotScheduleRequest extends SpeakeasyBase {
    queryParams: GetModifyClusterSnapshotScheduleQueryParams;
    headers: GetModifyClusterSnapshotScheduleHeaders;
}
export declare class GetModifyClusterSnapshotScheduleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
