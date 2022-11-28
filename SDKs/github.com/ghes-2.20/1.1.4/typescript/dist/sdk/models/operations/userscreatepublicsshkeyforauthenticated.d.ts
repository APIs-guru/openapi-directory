import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersCreatePublicSshKeyForAuthenticatedRequestBody extends SpeakeasyBase {
    key: string;
    title?: string;
}
export declare class UsersCreatePublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
    request?: UsersCreatePublicSshKeyForAuthenticatedRequestBody;
}
export declare class UsersCreatePublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    key?: shared.Key;
    validationError?: shared.ValidationError;
}
