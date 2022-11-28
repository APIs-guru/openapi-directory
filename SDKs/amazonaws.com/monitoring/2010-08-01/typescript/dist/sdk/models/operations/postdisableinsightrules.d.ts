import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisableInsightRulesActionEnum {
    DisableInsightRules = "DisableInsightRules"
}
export declare enum PostDisableInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDisableInsightRulesQueryParams extends SpeakeasyBase {
    action: PostDisableInsightRulesActionEnum;
    version: PostDisableInsightRulesVersionEnum;
}
export declare class PostDisableInsightRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableInsightRulesRequest extends SpeakeasyBase {
    queryParams: PostDisableInsightRulesQueryParams;
    headers: PostDisableInsightRulesHeaders;
    request?: Uint8Array;
}
export declare class PostDisableInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
