import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisableAlarmActionsActionEnum {
    DisableAlarmActions = "DisableAlarmActions"
}
export declare enum GetDisableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetDisableAlarmActionsQueryParams extends SpeakeasyBase {
    action: GetDisableAlarmActionsActionEnum;
    alarmNames: string[];
    version: GetDisableAlarmActionsVersionEnum;
}
export declare class GetDisableAlarmActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableAlarmActionsRequest extends SpeakeasyBase {
    queryParams: GetDisableAlarmActionsQueryParams;
    headers: GetDisableAlarmActionsHeaders;
}
export declare class GetDisableAlarmActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
