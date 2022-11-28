import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchTokenPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum PatchTokenRequestBodyChannelEnum {
    Physical = "physical",
    Slack = "slack",
    Telegram = "telegram",
    Sms = "sms"
}
export declare class PatchTokenRequestBody extends SpeakeasyBase {
    active?: boolean;
    channel?: PatchTokenRequestBodyChannelEnum;
    driver?: string;
    physicalId?: string;
    type?: string;
}
export declare class PatchToken201ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class PatchTokenRequest extends SpeakeasyBase {
    pathParams: PatchTokenPathParams;
    request: PatchTokenRequestBody;
}
export declare class PatchTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patchToken201ApplicationJsonObject?: PatchToken201ApplicationJson;
}
