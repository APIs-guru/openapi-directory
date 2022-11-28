import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersSelectedUserPathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare class GetUsersSelectedUserSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUsersSelectedUserRequest extends SpeakeasyBase {
    pathParams: GetUsersSelectedUserPathParams;
    security: GetUsersSelectedUserSecurity;
}
export declare class GetUsersSelectedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    user?: Map<string, any>;
}
