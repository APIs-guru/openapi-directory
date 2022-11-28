import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdateLdapMappingForTeamPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class EnterpriseAdminUpdateLdapMappingForTeamRequestBody extends SpeakeasyBase {
    ldapDn?: string;
}
export declare class EnterpriseAdminUpdateLdapMappingForTeamRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdateLdapMappingForTeamPathParams;
    request?: EnterpriseAdminUpdateLdapMappingForTeamRequestBody;
}
export declare class EnterpriseAdminUpdateLdapMappingForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ldapMappingTeam?: shared.LdapMappingTeam;
}
