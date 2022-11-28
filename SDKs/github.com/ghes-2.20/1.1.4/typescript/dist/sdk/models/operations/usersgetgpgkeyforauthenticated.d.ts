import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetGpgKeyForAuthenticatedPathParams extends SpeakeasyBase {
    gpgKeyId: number;
}
export declare class UsersGetGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
    pathParams: UsersGetGpgKeyForAuthenticatedPathParams;
}
export declare class UsersGetGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gpgKey?: shared.GpgKey;
}
