import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeDbSnapshotAttributesActionEnum {
    DescribeDbSnapshotAttributes = "DescribeDBSnapshotAttributes"
}
export declare enum GetDescribeDbSnapshotAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDescribeDbSnapshotAttributesQueryParams extends SpeakeasyBase {
    action: GetDescribeDbSnapshotAttributesActionEnum;
    dbSnapshotIdentifier: string;
    version: GetDescribeDbSnapshotAttributesVersionEnum;
}
export declare class GetDescribeDbSnapshotAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbSnapshotAttributesRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbSnapshotAttributesQueryParams;
    headers: GetDescribeDbSnapshotAttributesHeaders;
}
export declare class GetDescribeDbSnapshotAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
