import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUsersSelectedUserSshKeysKeyIdPathParams extends SpeakeasyBase {
    keyId: string;
    selectedUser: string;
}
export declare class DeleteUsersSelectedUserSshKeysKeyIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteUsersSelectedUserSshKeysKeyIdRequest extends SpeakeasyBase {
    pathParams: DeleteUsersSelectedUserSshKeysKeyIdPathParams;
    security: DeleteUsersSelectedUserSshKeysKeyIdSecurity;
}
export declare class DeleteUsersSelectedUserSshKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
