import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteUsageLimitActionEnum {
    DeleteUsageLimit = "DeleteUsageLimit"
}
export declare enum GetDeleteUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteUsageLimitQueryParams extends SpeakeasyBase {
    action: GetDeleteUsageLimitActionEnum;
    usageLimitId: string;
    version: GetDeleteUsageLimitVersionEnum;
}
export declare class GetDeleteUsageLimitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteUsageLimitRequest extends SpeakeasyBase {
    queryParams: GetDeleteUsageLimitQueryParams;
    headers: GetDeleteUsageLimitHeaders;
}
export declare class GetDeleteUsageLimitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
