import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetInsightRuleReportActionEnum {
    GetInsightRuleReport = "GetInsightRuleReport"
}
export declare enum GetGetInsightRuleReportVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetGetInsightRuleReportQueryParams extends SpeakeasyBase {
    action: GetGetInsightRuleReportActionEnum;
    endTime: Date;
    maxContributorCount?: number;
    metrics?: string[];
    orderBy?: string;
    period: number;
    ruleName: string;
    startTime: Date;
    version: GetGetInsightRuleReportVersionEnum;
}
export declare class GetGetInsightRuleReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetInsightRuleReportRequest extends SpeakeasyBase {
    queryParams: GetGetInsightRuleReportQueryParams;
    headers: GetGetInsightRuleReportHeaders;
}
export declare class GetGetInsightRuleReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
