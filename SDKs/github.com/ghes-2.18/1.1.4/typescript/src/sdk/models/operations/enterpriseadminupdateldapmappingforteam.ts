import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdateLdapMappingForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class EnterpriseAdminUpdateLdapMappingForTeamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;
}


export class EnterpriseAdminUpdateLdapMappingForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdateLdapMappingForTeamPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateLdapMappingForTeamRequestBody;
}


export class EnterpriseAdminUpdateLdapMappingForTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ldapMappingTeam?: shared.LdapMappingTeam;
}
