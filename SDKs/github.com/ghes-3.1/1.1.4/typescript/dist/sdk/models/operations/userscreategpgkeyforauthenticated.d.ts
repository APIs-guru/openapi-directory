import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersCreateGpgKeyForAuthenticatedRequestBody extends SpeakeasyBase {
    armoredPublicKey: string;
}
export declare class UsersCreateGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
    request?: UsersCreateGpgKeyForAuthenticatedRequestBody;
}
export declare class UsersCreateGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gpgKey?: shared.GpgKey;
    validationError?: shared.ValidationError;
}
