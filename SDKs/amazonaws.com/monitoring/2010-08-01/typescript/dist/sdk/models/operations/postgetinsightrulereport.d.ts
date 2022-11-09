import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetInsightRuleReportActionEnum {
    GetInsightRuleReport = "GetInsightRuleReport"
}
export declare enum PostGetInsightRuleReportVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostGetInsightRuleReportQueryParams extends SpeakeasyBase {
    action: PostGetInsightRuleReportActionEnum;
    version: PostGetInsightRuleReportVersionEnum;
}
export declare class PostGetInsightRuleReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetInsightRuleReportRequest extends SpeakeasyBase {
    queryParams: PostGetInsightRuleReportQueryParams;
    headers: PostGetInsightRuleReportHeaders;
    request?: Uint8Array;
}
export declare class PostGetInsightRuleReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
