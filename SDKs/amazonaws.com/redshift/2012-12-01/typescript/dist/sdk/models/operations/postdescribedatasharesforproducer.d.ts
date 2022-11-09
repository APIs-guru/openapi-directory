import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDataSharesForProducerActionEnum {
    DescribeDataSharesForProducer = "DescribeDataSharesForProducer"
}
export declare enum PostDescribeDataSharesForProducerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeDataSharesForProducerQueryParams extends SpeakeasyBase {
    action: PostDescribeDataSharesForProducerActionEnum;
    version: PostDescribeDataSharesForProducerVersionEnum;
}
export declare class PostDescribeDataSharesForProducerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDataSharesForProducerRequest extends SpeakeasyBase {
    queryParams: PostDescribeDataSharesForProducerQueryParams;
    headers: PostDescribeDataSharesForProducerHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDataSharesForProducerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
