import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetAlarmStateActionEnum {
    SetAlarmState = "SetAlarmState"
}
export declare enum GetSetAlarmStateStateValueEnum {
    Ok = "OK",
    Alarm = "ALARM",
    InsufficientData = "INSUFFICIENT_DATA"
}
export declare enum GetSetAlarmStateVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetSetAlarmStateQueryParams extends SpeakeasyBase {
    action: GetSetAlarmStateActionEnum;
    alarmName: string;
    stateReason: string;
    stateReasonData?: string;
    stateValue: GetSetAlarmStateStateValueEnum;
    version: GetSetAlarmStateVersionEnum;
}
export declare class GetSetAlarmStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetAlarmStateRequest extends SpeakeasyBase {
    queryParams: GetSetAlarmStateQueryParams;
    headers: GetSetAlarmStateHeaders;
}
export declare class GetSetAlarmStateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
