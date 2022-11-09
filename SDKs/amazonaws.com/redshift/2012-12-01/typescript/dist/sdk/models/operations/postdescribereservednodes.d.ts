import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeReservedNodesActionEnum {
    DescribeReservedNodes = "DescribeReservedNodes"
}
export declare enum PostDescribeReservedNodesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeReservedNodesQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedNodesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeReservedNodesVersionEnum;
}
export declare class PostDescribeReservedNodesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedNodesRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedNodesQueryParams;
    headers: PostDescribeReservedNodesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedNodesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
