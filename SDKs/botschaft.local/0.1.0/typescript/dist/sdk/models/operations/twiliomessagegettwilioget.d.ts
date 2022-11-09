import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TwilioMessageGetTwilioGetQueryParams extends SpeakeasyBase {
    base64Message?: string;
    message?: string;
    to: string;
}
export declare class TwilioMessageGetTwilioGetHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class TwilioMessageGetTwilioGetRequest extends SpeakeasyBase {
    queryParams: TwilioMessageGetTwilioGetQueryParams;
    headers: TwilioMessageGetTwilioGetHeaders;
}
export declare class TwilioMessageGetTwilioGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    twilioMessageGetTwilioGet200ApplicationJsonAny?: any;
}
