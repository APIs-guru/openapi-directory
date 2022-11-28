import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private"
}
export declare class UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody extends SpeakeasyBase {
    email: string;
    visibility: UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum;
}
export declare class UsersSetPrimaryEmailVisibilityForAuthenticatedRequest extends SpeakeasyBase {
    request?: UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody;
}
export declare class UsersSetPrimaryEmailVisibilityForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    emails?: shared.Email[];
    validationError?: shared.ValidationError;
}
