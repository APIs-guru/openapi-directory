import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminCreateUserRequestBody extends SpeakeasyBase {
    email?: string;
    login: string;
}
export declare class EnterpriseAdminCreateUserRequest extends SpeakeasyBase {
    request?: EnterpriseAdminCreateUserRequestBody;
}
export declare class EnterpriseAdminCreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    simpleUser?: shared.SimpleUser;
}
