import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEnableInsightRulesActionEnum {
    EnableInsightRules = "EnableInsightRules"
}
export declare enum GetEnableInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetEnableInsightRulesQueryParams extends SpeakeasyBase {
    action: GetEnableInsightRulesActionEnum;
    ruleNames: string[];
    version: GetEnableInsightRulesVersionEnum;
}
export declare class GetEnableInsightRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableInsightRulesRequest extends SpeakeasyBase {
    queryParams: GetEnableInsightRulesQueryParams;
    headers: GetEnableInsightRulesHeaders;
}
export declare class GetEnableInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
