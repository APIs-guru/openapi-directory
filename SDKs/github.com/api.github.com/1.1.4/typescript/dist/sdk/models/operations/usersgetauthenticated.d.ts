import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    usersGetAuthenticated200ApplicationJsonOneOf?: any;
}
