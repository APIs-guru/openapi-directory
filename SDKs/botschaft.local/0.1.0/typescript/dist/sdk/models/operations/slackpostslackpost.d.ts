import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SlackPostSlackPostHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class SlackPostSlackPostRequest extends SpeakeasyBase {
    headers: SlackPostSlackPostHeaders;
    request: shared.SlackMessageRequest;
}
export declare class SlackPostSlackPostResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    slackPostSlackPost200ApplicationJsonAny?: any;
}
