import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersDeletePublicSshKeyForAuthenticatedPathParams extends SpeakeasyBase {
    keyId: number;
}
export declare class UsersDeletePublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
    pathParams: UsersDeletePublicSshKeyForAuthenticatedPathParams;
}
export declare class UsersDeletePublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
