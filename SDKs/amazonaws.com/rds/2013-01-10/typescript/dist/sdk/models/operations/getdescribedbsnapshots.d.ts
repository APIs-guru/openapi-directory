import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeDbSnapshotsActionEnum {
    DescribeDbSnapshots = "DescribeDBSnapshots"
}
export declare enum GetDescribeDbSnapshotsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDescribeDbSnapshotsQueryParams extends SpeakeasyBase {
    action: GetDescribeDbSnapshotsActionEnum;
    dbInstanceIdentifier?: string;
    dbSnapshotIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    snapshotType?: string;
    version: GetDescribeDbSnapshotsVersionEnum;
}
export declare class GetDescribeDbSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbSnapshotsRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbSnapshotsQueryParams;
    headers: GetDescribeDbSnapshotsHeaders;
}
export declare class GetDescribeDbSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
