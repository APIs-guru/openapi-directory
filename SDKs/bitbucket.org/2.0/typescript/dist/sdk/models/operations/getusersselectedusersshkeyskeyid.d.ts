import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersSelectedUserSshKeysKeyIdPathParams extends SpeakeasyBase {
    keyId: string;
    selectedUser: string;
}
export declare class GetUsersSelectedUserSshKeysKeyIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUsersSelectedUserSshKeysKeyIdRequest extends SpeakeasyBase {
    pathParams: GetUsersSelectedUserSshKeysKeyIdPathParams;
    security: GetUsersSelectedUserSshKeysKeyIdSecurity;
}
export declare class GetUsersSelectedUserSshKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    sshAccountKey?: Map<string, any>;
}
