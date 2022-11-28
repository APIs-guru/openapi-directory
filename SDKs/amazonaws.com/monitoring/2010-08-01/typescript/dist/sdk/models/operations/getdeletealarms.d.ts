import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteAlarmsActionEnum {
    DeleteAlarms = "DeleteAlarms"
}
export declare enum GetDeleteAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetDeleteAlarmsQueryParams extends SpeakeasyBase {
    action: GetDeleteAlarmsActionEnum;
    alarmNames: string[];
    version: GetDeleteAlarmsVersionEnum;
}
export declare class GetDeleteAlarmsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteAlarmsRequest extends SpeakeasyBase {
    queryParams: GetDeleteAlarmsQueryParams;
    headers: GetDeleteAlarmsHeaders;
}
export declare class GetDeleteAlarmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
