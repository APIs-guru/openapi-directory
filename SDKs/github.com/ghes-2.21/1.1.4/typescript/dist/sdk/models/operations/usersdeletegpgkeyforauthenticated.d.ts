import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersDeleteGpgKeyForAuthenticatedPathParams extends SpeakeasyBase {
    gpgKeyId: number;
}
export declare class UsersDeleteGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
    pathParams: UsersDeleteGpgKeyForAuthenticatedPathParams;
}
export declare class UsersDeleteGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
