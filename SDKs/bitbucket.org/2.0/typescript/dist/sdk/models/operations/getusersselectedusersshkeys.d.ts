import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersSelectedUserSshKeysPathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare class GetUsersSelectedUserSshKeysSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUsersSelectedUserSshKeysRequest extends SpeakeasyBase {
    pathParams: GetUsersSelectedUserSshKeysPathParams;
    security: GetUsersSelectedUserSshKeysSecurity;
}
export declare class GetUsersSelectedUserSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedSshUserKeys?: shared.PaginatedSshUserKeys;
}
