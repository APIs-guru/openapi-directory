import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TwilioMessagePostTwilioPostHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class TwilioMessagePostTwilioPostRequest extends SpeakeasyBase {
    headers: TwilioMessagePostTwilioPostHeaders;
    request: shared.TwilioMessageRequest;
}
export declare class TwilioMessagePostTwilioPostResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    twilioMessagePostTwilioPost200ApplicationJsonAny?: any;
}
