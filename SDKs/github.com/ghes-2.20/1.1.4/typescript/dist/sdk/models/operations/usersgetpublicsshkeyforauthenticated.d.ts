import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetPublicSshKeyForAuthenticatedPathParams extends SpeakeasyBase {
    keyId: number;
}
export declare class UsersGetPublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
    pathParams: UsersGetPublicSshKeyForAuthenticatedPathParams;
}
export declare class UsersGetPublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    key?: shared.Key;
}
