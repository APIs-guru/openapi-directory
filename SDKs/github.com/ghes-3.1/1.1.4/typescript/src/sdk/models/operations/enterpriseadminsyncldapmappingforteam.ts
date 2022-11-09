import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminSyncLdapMappingForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class EnterpriseAdminSyncLdapMappingForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminSyncLdapMappingForTeamPathParams;
}


export class EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class EnterpriseAdminSyncLdapMappingForTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminSyncLdapMappingForTeam201ApplicationJsonObject?: EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson;
}
