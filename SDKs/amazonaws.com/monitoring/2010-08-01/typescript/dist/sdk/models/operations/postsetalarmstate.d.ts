import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSetAlarmStateActionEnum {
    SetAlarmState = "SetAlarmState"
}
export declare enum PostSetAlarmStateVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostSetAlarmStateQueryParams extends SpeakeasyBase {
    action: PostSetAlarmStateActionEnum;
    version: PostSetAlarmStateVersionEnum;
}
export declare class PostSetAlarmStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetAlarmStateRequest extends SpeakeasyBase {
    queryParams: PostSetAlarmStateQueryParams;
    headers: PostSetAlarmStateHeaders;
    request?: Uint8Array;
}
export declare class PostSetAlarmStateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
