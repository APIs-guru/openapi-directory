import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetDescribeAlarmsActionEnum {
    DescribeAlarms = "DescribeAlarms"
}
export declare enum GetDescribeAlarmsStateValueEnum {
    Ok = "OK",
    Alarm = "ALARM",
    InsufficientData = "INSUFFICIENT_DATA"
}
export declare enum GetDescribeAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetDescribeAlarmsQueryParams extends SpeakeasyBase {
    action: GetDescribeAlarmsActionEnum;
    actionPrefix?: string;
    alarmNamePrefix?: string;
    alarmNames?: string[];
    alarmTypes?: shared.AlarmTypeEnum[];
    childrenOfAlarmName?: string;
    maxRecords?: number;
    nextToken?: string;
    parentsOfAlarmName?: string;
    stateValue?: GetDescribeAlarmsStateValueEnum;
    version: GetDescribeAlarmsVersionEnum;
}
export declare class GetDescribeAlarmsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAlarmsRequest extends SpeakeasyBase {
    queryParams: GetDescribeAlarmsQueryParams;
    headers: GetDescribeAlarmsHeaders;
}
export declare class GetDescribeAlarmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
