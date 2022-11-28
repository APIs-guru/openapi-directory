import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListBlockedByAuthenticated415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class UsersListBlockedByAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    simpleUsers?: shared.SimpleUser[];
    usersListBlockedByAuthenticated415ApplicationJsonObject?: UsersListBlockedByAuthenticated415ApplicationJson;
}
