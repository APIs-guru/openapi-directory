import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPutMetricAlarmActionEnum {
    PutMetricAlarm = "PutMetricAlarm"
}
export declare enum PostPutMetricAlarmVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostPutMetricAlarmQueryParams extends SpeakeasyBase {
    action: PostPutMetricAlarmActionEnum;
    version: PostPutMetricAlarmVersionEnum;
}
export declare class PostPutMetricAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutMetricAlarmRequest extends SpeakeasyBase {
    queryParams: PostPutMetricAlarmQueryParams;
    headers: PostPutMetricAlarmHeaders;
    request?: Uint8Array;
}
export declare class PostPutMetricAlarmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
