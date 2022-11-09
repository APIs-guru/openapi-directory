import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeDataSharesForProducerActionEnum {
    DescribeDataSharesForProducer = "DescribeDataSharesForProducer"
}
export declare enum GetDescribeDataSharesForProducerStatusEnum {
    Active = "ACTIVE",
    Authorized = "AUTHORIZED",
    PendingAuthorization = "PENDING_AUTHORIZATION",
    Deauthorized = "DEAUTHORIZED",
    Rejected = "REJECTED"
}
export declare enum GetDescribeDataSharesForProducerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeDataSharesForProducerQueryParams extends SpeakeasyBase {
    action: GetDescribeDataSharesForProducerActionEnum;
    marker?: string;
    maxRecords?: number;
    producerArn?: string;
    status?: GetDescribeDataSharesForProducerStatusEnum;
    version: GetDescribeDataSharesForProducerVersionEnum;
}
export declare class GetDescribeDataSharesForProducerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDataSharesForProducerRequest extends SpeakeasyBase {
    queryParams: GetDescribeDataSharesForProducerQueryParams;
    headers: GetDescribeDataSharesForProducerHeaders;
}
export declare class GetDescribeDataSharesForProducerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
