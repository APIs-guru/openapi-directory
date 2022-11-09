import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteMetricStreamActionEnum {
    DeleteMetricStream = "DeleteMetricStream"
}
export declare enum GetDeleteMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetDeleteMetricStreamQueryParams extends SpeakeasyBase {
    action: GetDeleteMetricStreamActionEnum;
    name: string;
    version: GetDeleteMetricStreamVersionEnum;
}
export declare class GetDeleteMetricStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteMetricStreamRequest extends SpeakeasyBase {
    queryParams: GetDeleteMetricStreamQueryParams;
    headers: GetDeleteMetricStreamHeaders;
}
export declare class GetDeleteMetricStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
