import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbClusterSnapshotAttributesActionEnum {
    DescribeDbClusterSnapshotAttributes = "DescribeDBClusterSnapshotAttributes"
}
export declare enum PostDescribeDbClusterSnapshotAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbClusterSnapshotAttributesQueryParams extends SpeakeasyBase {
    action: PostDescribeDbClusterSnapshotAttributesActionEnum;
    version: PostDescribeDbClusterSnapshotAttributesVersionEnum;
}
export declare class PostDescribeDbClusterSnapshotAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbClusterSnapshotAttributesRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbClusterSnapshotAttributesQueryParams;
    headers: PostDescribeDbClusterSnapshotAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbClusterSnapshotAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
