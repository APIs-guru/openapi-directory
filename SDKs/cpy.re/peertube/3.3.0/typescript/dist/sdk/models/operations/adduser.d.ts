import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AddUserRequest extends SpeakeasyBase {
    request: any;
    security: AddUserSecurity;
}
export declare class AddUserResponse extends SpeakeasyBase {
    addUserResponse?: any;
    contentType: string;
    statusCode: number;
}
