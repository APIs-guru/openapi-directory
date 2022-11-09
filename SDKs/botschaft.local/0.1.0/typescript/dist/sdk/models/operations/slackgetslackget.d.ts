import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SlackGetSlackGetQueryParams extends SpeakeasyBase {
    base64Message?: string;
    channel: string;
    message?: string;
}
export declare class SlackGetSlackGetHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class SlackGetSlackGetRequest extends SpeakeasyBase {
    queryParams: SlackGetSlackGetQueryParams;
    headers: SlackGetSlackGetHeaders;
}
export declare class SlackGetSlackGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    slackGetSlackGet200ApplicationJsonAny?: any;
}
