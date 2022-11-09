import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeAlarmsActionEnum {
    DescribeAlarms = "DescribeAlarms"
}
export declare enum PostDescribeAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDescribeAlarmsQueryParams extends SpeakeasyBase {
    action: PostDescribeAlarmsActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostDescribeAlarmsVersionEnum;
}
export declare class PostDescribeAlarmsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAlarmsRequest extends SpeakeasyBase {
    queryParams: PostDescribeAlarmsQueryParams;
    headers: PostDescribeAlarmsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAlarmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
