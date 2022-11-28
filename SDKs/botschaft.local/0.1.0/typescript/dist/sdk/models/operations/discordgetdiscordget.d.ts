import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscordGetDiscordGetQueryParams extends SpeakeasyBase {
    base64Message?: string;
    channel: string;
    message?: string;
}
export declare class DiscordGetDiscordGetHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class DiscordGetDiscordGetRequest extends SpeakeasyBase {
    queryParams: DiscordGetDiscordGetQueryParams;
    headers: DiscordGetDiscordGetHeaders;
}
export declare class DiscordGetDiscordGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    discordGetDiscordGet200ApplicationJsonAny?: any;
}
