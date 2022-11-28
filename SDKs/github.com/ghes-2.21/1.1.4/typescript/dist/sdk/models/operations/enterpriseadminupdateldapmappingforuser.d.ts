import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdateLdapMappingForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class EnterpriseAdminUpdateLdapMappingForUserRequestBody extends SpeakeasyBase {
    ldapDn?: string;
}
export declare class EnterpriseAdminUpdateLdapMappingForUserRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdateLdapMappingForUserPathParams;
    request?: EnterpriseAdminUpdateLdapMappingForUserRequestBody;
}
export declare class EnterpriseAdminUpdateLdapMappingForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ldapMappingUser?: shared.LdapMappingUser;
}
