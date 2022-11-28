import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersSelectedUserSshKeysKeyIdPathParams extends SpeakeasyBase {
    keyId: string;
    selectedUser: string;
}
export declare class PutUsersSelectedUserSshKeysKeyIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutUsersSelectedUserSshKeysKeyIdRequest extends SpeakeasyBase {
    pathParams: PutUsersSelectedUserSshKeysKeyIdPathParams;
    request?: Map<string, any>;
    security: PutUsersSelectedUserSshKeysKeyIdSecurity;
}
export declare class PutUsersSelectedUserSshKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    sshAccountKey?: Map<string, any>;
}
