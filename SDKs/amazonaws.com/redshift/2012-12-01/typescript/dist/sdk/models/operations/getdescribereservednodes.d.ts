import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeReservedNodesActionEnum {
    DescribeReservedNodes = "DescribeReservedNodes"
}
export declare enum GetDescribeReservedNodesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeReservedNodesQueryParams extends SpeakeasyBase {
    action: GetDescribeReservedNodesActionEnum;
    marker?: string;
    maxRecords?: number;
    reservedNodeId?: string;
    version: GetDescribeReservedNodesVersionEnum;
}
export declare class GetDescribeReservedNodesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeReservedNodesRequest extends SpeakeasyBase {
    queryParams: GetDescribeReservedNodesQueryParams;
    headers: GetDescribeReservedNodesHeaders;
}
export declare class GetDescribeReservedNodesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
