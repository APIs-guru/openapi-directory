import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyUsageLimitActionEnum {
    ModifyUsageLimit = "ModifyUsageLimit"
}
export declare enum GetModifyUsageLimitBreachActionEnum {
    Log = "log",
    EmitMetric = "emit-metric",
    Disable = "disable"
}
export declare enum GetModifyUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyUsageLimitQueryParams extends SpeakeasyBase {
    action: GetModifyUsageLimitActionEnum;
    amount?: number;
    breachAction?: GetModifyUsageLimitBreachActionEnum;
    usageLimitId: string;
    version: GetModifyUsageLimitVersionEnum;
}
export declare class GetModifyUsageLimitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyUsageLimitRequest extends SpeakeasyBase {
    queryParams: GetModifyUsageLimitQueryParams;
    headers: GetModifyUsageLimitHeaders;
}
export declare class GetModifyUsageLimitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
