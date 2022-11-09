import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostEnableInsightRulesActionEnum {
    EnableInsightRules = "EnableInsightRules"
}
export declare enum PostEnableInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostEnableInsightRulesQueryParams extends SpeakeasyBase {
    action: PostEnableInsightRulesActionEnum;
    version: PostEnableInsightRulesVersionEnum;
}
export declare class PostEnableInsightRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableInsightRulesRequest extends SpeakeasyBase {
    queryParams: PostEnableInsightRulesQueryParams;
    headers: PostEnableInsightRulesHeaders;
    request?: Uint8Array;
}
export declare class PostEnableInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
