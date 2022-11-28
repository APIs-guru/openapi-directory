import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdateLdapMappingForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class EnterpriseAdminUpdateLdapMappingForTeamRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;
}


export class EnterpriseAdminUpdateLdapMappingForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdateLdapMappingForTeamPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateLdapMappingForTeamRequestBody;
}


export class EnterpriseAdminUpdateLdapMappingForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ldapMappingTeam?: shared.LdapMappingTeam;
}
