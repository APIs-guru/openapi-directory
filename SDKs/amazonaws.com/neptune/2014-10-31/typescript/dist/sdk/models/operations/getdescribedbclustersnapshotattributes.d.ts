import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeDbClusterSnapshotAttributesActionEnum {
    DescribeDbClusterSnapshotAttributes = "DescribeDBClusterSnapshotAttributes"
}
export declare enum GetDescribeDbClusterSnapshotAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDescribeDbClusterSnapshotAttributesQueryParams extends SpeakeasyBase {
    action: GetDescribeDbClusterSnapshotAttributesActionEnum;
    dbClusterSnapshotIdentifier: string;
    version: GetDescribeDbClusterSnapshotAttributesVersionEnum;
}
export declare class GetDescribeDbClusterSnapshotAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbClusterSnapshotAttributesRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbClusterSnapshotAttributesQueryParams;
    headers: GetDescribeDbClusterSnapshotAttributesHeaders;
}
export declare class GetDescribeDbClusterSnapshotAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
