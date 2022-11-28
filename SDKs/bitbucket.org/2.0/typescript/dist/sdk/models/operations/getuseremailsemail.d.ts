import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserEmailsEmailPathParams extends SpeakeasyBase {
    email: string;
}
export declare class GetUserEmailsEmailSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUserEmailsEmailRequest extends SpeakeasyBase {
    pathParams: GetUserEmailsEmailPathParams;
    security: GetUserEmailsEmailSecurity;
}
export declare class GetUserEmailsEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
