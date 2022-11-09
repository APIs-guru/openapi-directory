import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutInsightRuleActionEnum {
    PutInsightRule = "PutInsightRule"
}
export declare enum PostPutInsightRuleVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostPutInsightRuleQueryParams extends SpeakeasyBase {
    action: PostPutInsightRuleActionEnum;
    version: PostPutInsightRuleVersionEnum;
}
export declare class PostPutInsightRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutInsightRuleRequest extends SpeakeasyBase {
    queryParams: PostPutInsightRuleQueryParams;
    headers: PostPutInsightRuleHeaders;
    request?: Uint8Array;
}
export declare class PostPutInsightRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
