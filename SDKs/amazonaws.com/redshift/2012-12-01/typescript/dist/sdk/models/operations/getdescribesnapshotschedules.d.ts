import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeSnapshotSchedulesActionEnum {
    DescribeSnapshotSchedules = "DescribeSnapshotSchedules"
}
export declare enum GetDescribeSnapshotSchedulesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeSnapshotSchedulesQueryParams extends SpeakeasyBase {
    action: GetDescribeSnapshotSchedulesActionEnum;
    clusterIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    scheduleIdentifier?: string;
    tagKeys?: string[];
    tagValues?: string[];
    version: GetDescribeSnapshotSchedulesVersionEnum;
}
export declare class GetDescribeSnapshotSchedulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSnapshotSchedulesRequest extends SpeakeasyBase {
    queryParams: GetDescribeSnapshotSchedulesQueryParams;
    headers: GetDescribeSnapshotSchedulesHeaders;
}
export declare class GetDescribeSnapshotSchedulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
