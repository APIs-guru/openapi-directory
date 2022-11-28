import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeDataSharesForConsumerActionEnum {
    DescribeDataSharesForConsumer = "DescribeDataSharesForConsumer"
}
export declare enum GetDescribeDataSharesForConsumerStatusEnum {
    Active = "ACTIVE",
    Available = "AVAILABLE"
}
export declare enum GetDescribeDataSharesForConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeDataSharesForConsumerQueryParams extends SpeakeasyBase {
    action: GetDescribeDataSharesForConsumerActionEnum;
    consumerArn?: string;
    marker?: string;
    maxRecords?: number;
    status?: GetDescribeDataSharesForConsumerStatusEnum;
    version: GetDescribeDataSharesForConsumerVersionEnum;
}
export declare class GetDescribeDataSharesForConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDataSharesForConsumerRequest extends SpeakeasyBase {
    queryParams: GetDescribeDataSharesForConsumerQueryParams;
    headers: GetDescribeDataSharesForConsumerHeaders;
}
export declare class GetDescribeDataSharesForConsumerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
