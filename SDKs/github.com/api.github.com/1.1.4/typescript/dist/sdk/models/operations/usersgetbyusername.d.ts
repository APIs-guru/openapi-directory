import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetByUsernamePathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersGetByUsernameRequest extends SpeakeasyBase {
    pathParams: UsersGetByUsernamePathParams;
}
export declare class UsersGetByUsernameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    usersGetByUsername200ApplicationJsonOneOf?: any;
}
