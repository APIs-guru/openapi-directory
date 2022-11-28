import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersAddEmailForAuthenticatedRequestBody1 extends SpeakeasyBase {
    emails: string[];
}
export declare class UsersAddEmailForAuthenticatedRequest extends SpeakeasyBase {
    request?: any;
}
export declare class UsersAddEmailForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    emails?: shared.Email[];
    validationError?: shared.ValidationError;
}
