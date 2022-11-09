import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEnableAlarmActionsActionEnum {
    EnableAlarmActions = "EnableAlarmActions"
}
export declare enum GetEnableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetEnableAlarmActionsQueryParams extends SpeakeasyBase {
    action: GetEnableAlarmActionsActionEnum;
    alarmNames: string[];
    version: GetEnableAlarmActionsVersionEnum;
}
export declare class GetEnableAlarmActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableAlarmActionsRequest extends SpeakeasyBase {
    queryParams: GetEnableAlarmActionsQueryParams;
    headers: GetEnableAlarmActionsHeaders;
}
export declare class GetEnableAlarmActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
