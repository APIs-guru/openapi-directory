import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostEnableAlarmActionsActionEnum {
    EnableAlarmActions = "EnableAlarmActions"
}
export declare enum PostEnableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostEnableAlarmActionsQueryParams extends SpeakeasyBase {
    action: PostEnableAlarmActionsActionEnum;
    version: PostEnableAlarmActionsVersionEnum;
}
export declare class PostEnableAlarmActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableAlarmActionsRequest extends SpeakeasyBase {
    queryParams: PostEnableAlarmActionsQueryParams;
    headers: PostEnableAlarmActionsHeaders;
    request?: Uint8Array;
}
export declare class PostEnableAlarmActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
