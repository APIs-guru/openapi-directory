import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteInsightRulesActionEnum {
    DeleteInsightRules = "DeleteInsightRules"
}
export declare enum PostDeleteInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDeleteInsightRulesQueryParams extends SpeakeasyBase {
    action: PostDeleteInsightRulesActionEnum;
    version: PostDeleteInsightRulesVersionEnum;
}
export declare class PostDeleteInsightRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteInsightRulesRequest extends SpeakeasyBase {
    queryParams: PostDeleteInsightRulesQueryParams;
    headers: PostDeleteInsightRulesHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
