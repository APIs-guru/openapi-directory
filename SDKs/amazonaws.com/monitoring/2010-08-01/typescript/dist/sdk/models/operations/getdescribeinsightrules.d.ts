import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeInsightRulesActionEnum {
    DescribeInsightRules = "DescribeInsightRules"
}
export declare enum GetDescribeInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetDescribeInsightRulesQueryParams extends SpeakeasyBase {
    action: GetDescribeInsightRulesActionEnum;
    maxResults?: number;
    nextToken?: string;
    version: GetDescribeInsightRulesVersionEnum;
}
export declare class GetDescribeInsightRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeInsightRulesRequest extends SpeakeasyBase {
    queryParams: GetDescribeInsightRulesQueryParams;
    headers: GetDescribeInsightRulesHeaders;
}
export declare class GetDescribeInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
