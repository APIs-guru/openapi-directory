import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbSnapshotAttributesActionEnum {
    DescribeDbSnapshotAttributes = "DescribeDBSnapshotAttributes"
}
export declare enum PostDescribeDbSnapshotAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbSnapshotAttributesQueryParams extends SpeakeasyBase {
    action: PostDescribeDbSnapshotAttributesActionEnum;
    version: PostDescribeDbSnapshotAttributesVersionEnum;
}
export declare class PostDescribeDbSnapshotAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbSnapshotAttributesRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbSnapshotAttributesQueryParams;
    headers: PostDescribeDbSnapshotAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbSnapshotAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
