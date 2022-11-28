import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteInsightRulesActionEnum {
    DeleteInsightRules = "DeleteInsightRules"
}
export declare enum GetDeleteInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetDeleteInsightRulesQueryParams extends SpeakeasyBase {
    action: GetDeleteInsightRulesActionEnum;
    ruleNames: string[];
    version: GetDeleteInsightRulesVersionEnum;
}
export declare class GetDeleteInsightRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteInsightRulesRequest extends SpeakeasyBase {
    queryParams: GetDeleteInsightRulesQueryParams;
    headers: GetDeleteInsightRulesHeaders;
}
export declare class GetDeleteInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
