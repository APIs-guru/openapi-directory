import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeInsightRulesActionEnum {
    DescribeInsightRules = "DescribeInsightRules"
}
export declare enum PostDescribeInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDescribeInsightRulesQueryParams extends SpeakeasyBase {
    action: PostDescribeInsightRulesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeInsightRulesVersionEnum;
}
export declare class PostDescribeInsightRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInsightRulesRequest extends SpeakeasyBase {
    queryParams: PostDescribeInsightRulesQueryParams;
    headers: PostDescribeInsightRulesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
