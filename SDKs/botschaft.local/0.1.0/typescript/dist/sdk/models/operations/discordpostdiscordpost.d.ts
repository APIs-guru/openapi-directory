import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DiscordPostDiscordPostHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class DiscordPostDiscordPostRequest extends SpeakeasyBase {
    headers: DiscordPostDiscordPostHeaders;
    request: shared.DiscordMessageRequest;
}
export declare class DiscordPostDiscordPostResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    discordPostDiscordPost200ApplicationJsonAny?: any;
}
