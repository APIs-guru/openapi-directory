import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeSnapshotSchedulesActionEnum {
    DescribeSnapshotSchedules = "DescribeSnapshotSchedules"
}
export declare enum PostDescribeSnapshotSchedulesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeSnapshotSchedulesQueryParams extends SpeakeasyBase {
    action: PostDescribeSnapshotSchedulesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeSnapshotSchedulesVersionEnum;
}
export declare class PostDescribeSnapshotSchedulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSnapshotSchedulesRequest extends SpeakeasyBase {
    queryParams: PostDescribeSnapshotSchedulesQueryParams;
    headers: PostDescribeSnapshotSchedulesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSnapshotSchedulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
