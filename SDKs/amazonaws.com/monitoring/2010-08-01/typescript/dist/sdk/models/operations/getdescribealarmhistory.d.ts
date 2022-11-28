import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDescribeAlarmHistoryActionEnum {
    DescribeAlarmHistory = "DescribeAlarmHistory"
}
export declare enum GetDescribeAlarmHistoryHistoryItemTypeEnum {
    ConfigurationUpdate = "ConfigurationUpdate",
    StateUpdate = "StateUpdate",
    Action = "Action"
}
export declare enum GetDescribeAlarmHistoryScanByEnum {
    TimestampDescending = "TimestampDescending",
    TimestampAscending = "TimestampAscending"
}
export declare enum GetDescribeAlarmHistoryVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetDescribeAlarmHistoryQueryParams extends SpeakeasyBase {
    action: GetDescribeAlarmHistoryActionEnum;
    alarmName?: string;
    alarmTypes?: shared.AlarmTypeEnum[];
    endDate?: Date;
    historyItemType?: GetDescribeAlarmHistoryHistoryItemTypeEnum;
    maxRecords?: number;
    nextToken?: string;
    scanBy?: GetDescribeAlarmHistoryScanByEnum;
    startDate?: Date;
    version: GetDescribeAlarmHistoryVersionEnum;
}
export declare class GetDescribeAlarmHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAlarmHistoryRequest extends SpeakeasyBase {
    queryParams: GetDescribeAlarmHistoryQueryParams;
    headers: GetDescribeAlarmHistoryHeaders;
}
export declare class GetDescribeAlarmHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
