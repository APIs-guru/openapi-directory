import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeSnapshotCopyGrantsActionEnum {
    DescribeSnapshotCopyGrants = "DescribeSnapshotCopyGrants"
}
export declare enum GetDescribeSnapshotCopyGrantsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeSnapshotCopyGrantsQueryParams extends SpeakeasyBase {
    action: GetDescribeSnapshotCopyGrantsActionEnum;
    marker?: string;
    maxRecords?: number;
    snapshotCopyGrantName?: string;
    tagKeys?: string[];
    tagValues?: string[];
    version: GetDescribeSnapshotCopyGrantsVersionEnum;
}
export declare class GetDescribeSnapshotCopyGrantsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSnapshotCopyGrantsRequest extends SpeakeasyBase {
    queryParams: GetDescribeSnapshotCopyGrantsQueryParams;
    headers: GetDescribeSnapshotCopyGrantsHeaders;
}
export declare class GetDescribeSnapshotCopyGrantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
