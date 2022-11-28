import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeClusterTracksActionEnum {
    DescribeClusterTracks = "DescribeClusterTracks"
}
export declare enum GetDescribeClusterTracksVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeClusterTracksQueryParams extends SpeakeasyBase {
    action: GetDescribeClusterTracksActionEnum;
    maintenanceTrackName?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeClusterTracksVersionEnum;
}
export declare class GetDescribeClusterTracksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeClusterTracksRequest extends SpeakeasyBase {
    queryParams: GetDescribeClusterTracksQueryParams;
    headers: GetDescribeClusterTracksHeaders;
}
export declare class GetDescribeClusterTracksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
