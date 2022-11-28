import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisableAlarmActionsActionEnum {
    DisableAlarmActions = "DisableAlarmActions"
}
export declare enum PostDisableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDisableAlarmActionsQueryParams extends SpeakeasyBase {
    action: PostDisableAlarmActionsActionEnum;
    version: PostDisableAlarmActionsVersionEnum;
}
export declare class PostDisableAlarmActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableAlarmActionsRequest extends SpeakeasyBase {
    queryParams: PostDisableAlarmActionsQueryParams;
    headers: PostDisableAlarmActionsHeaders;
    request?: Uint8Array;
}
export declare class PostDisableAlarmActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
