import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminSyncLdapMappingForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class EnterpriseAdminSyncLdapMappingForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminSyncLdapMappingForTeamPathParams;
}


export class EnterpriseAdminSyncLdapMappingForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminSyncLdapMappingForTeam201ApplicationJsonObject?: EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson;
}
