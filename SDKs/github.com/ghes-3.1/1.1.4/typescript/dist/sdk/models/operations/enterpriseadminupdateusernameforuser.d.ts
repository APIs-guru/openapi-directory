import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminUpdateUsernameForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class EnterpriseAdminUpdateUsernameForUserRequestBody extends SpeakeasyBase {
    login: string;
}
export declare class EnterpriseAdminUpdateUsernameForUser202ApplicationJson extends SpeakeasyBase {
    message?: string;
    url?: string;
}
export declare class EnterpriseAdminUpdateUsernameForUserRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdateUsernameForUserPathParams;
    request?: EnterpriseAdminUpdateUsernameForUserRequestBody;
}
export declare class EnterpriseAdminUpdateUsernameForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminUpdateUsernameForUser202ApplicationJsonObject?: EnterpriseAdminUpdateUsernameForUser202ApplicationJson;
}
