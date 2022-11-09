import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeAlarmsForMetricActionEnum {
    DescribeAlarmsForMetric = "DescribeAlarmsForMetric"
}
export declare enum PostDescribeAlarmsForMetricVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDescribeAlarmsForMetricQueryParams extends SpeakeasyBase {
    action: PostDescribeAlarmsForMetricActionEnum;
    version: PostDescribeAlarmsForMetricVersionEnum;
}
export declare class PostDescribeAlarmsForMetricHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAlarmsForMetricRequest extends SpeakeasyBase {
    queryParams: PostDescribeAlarmsForMetricQueryParams;
    headers: PostDescribeAlarmsForMetricHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAlarmsForMetricResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
