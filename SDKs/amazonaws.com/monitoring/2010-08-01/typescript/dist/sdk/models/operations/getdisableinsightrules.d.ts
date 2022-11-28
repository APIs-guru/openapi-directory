import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisableInsightRulesActionEnum {
    DisableInsightRules = "DisableInsightRules"
}
export declare enum GetDisableInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetDisableInsightRulesQueryParams extends SpeakeasyBase {
    action: GetDisableInsightRulesActionEnum;
    ruleNames: string[];
    version: GetDisableInsightRulesVersionEnum;
}
export declare class GetDisableInsightRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableInsightRulesRequest extends SpeakeasyBase {
    queryParams: GetDisableInsightRulesQueryParams;
    headers: GetDisableInsightRulesHeaders;
}
export declare class GetDisableInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
