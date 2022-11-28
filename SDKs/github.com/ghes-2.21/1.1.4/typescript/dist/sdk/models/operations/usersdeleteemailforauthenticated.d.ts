import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
/**
 * Deletes one or more email addresses from your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
**/
export declare class UsersDeleteEmailForAuthenticatedRequestBody1 extends SpeakeasyBase {
    emails: string[];
}
export declare class UsersDeleteEmailForAuthenticatedRequest extends SpeakeasyBase {
    request?: any;
}
export declare class UsersDeleteEmailForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
