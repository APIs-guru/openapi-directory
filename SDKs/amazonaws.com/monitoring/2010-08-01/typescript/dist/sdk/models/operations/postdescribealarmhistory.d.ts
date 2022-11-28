import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeAlarmHistoryActionEnum {
    DescribeAlarmHistory = "DescribeAlarmHistory"
}
export declare enum PostDescribeAlarmHistoryVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDescribeAlarmHistoryQueryParams extends SpeakeasyBase {
    action: PostDescribeAlarmHistoryActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostDescribeAlarmHistoryVersionEnum;
}
export declare class PostDescribeAlarmHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAlarmHistoryRequest extends SpeakeasyBase {
    queryParams: PostDescribeAlarmHistoryQueryParams;
    headers: PostDescribeAlarmHistoryHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAlarmHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
