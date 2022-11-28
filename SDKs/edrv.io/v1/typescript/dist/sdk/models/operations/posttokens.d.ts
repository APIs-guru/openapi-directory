import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTokensRequestBodyChannelEnum {
    Physical = "physical",
    Slack = "slack",
    Telegram = "telegram",
    Sms = "sms"
}
export declare class PostTokensRequestBody extends SpeakeasyBase {
    active: boolean;
    channel: PostTokensRequestBodyChannelEnum;
    driver: string;
    physicalId: string;
    type?: string;
}
export declare class PostTokens201ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class PostTokensRequest extends SpeakeasyBase {
    request: PostTokensRequestBody;
}
export declare class PostTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTokens201ApplicationJsonObject?: PostTokens201ApplicationJson;
}
