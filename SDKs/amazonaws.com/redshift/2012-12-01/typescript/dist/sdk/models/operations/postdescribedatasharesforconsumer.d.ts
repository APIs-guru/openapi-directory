import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDataSharesForConsumerActionEnum {
    DescribeDataSharesForConsumer = "DescribeDataSharesForConsumer"
}
export declare enum PostDescribeDataSharesForConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeDataSharesForConsumerQueryParams extends SpeakeasyBase {
    action: PostDescribeDataSharesForConsumerActionEnum;
    version: PostDescribeDataSharesForConsumerVersionEnum;
}
export declare class PostDescribeDataSharesForConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDataSharesForConsumerRequest extends SpeakeasyBase {
    queryParams: PostDescribeDataSharesForConsumerQueryParams;
    headers: PostDescribeDataSharesForConsumerHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDataSharesForConsumerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
