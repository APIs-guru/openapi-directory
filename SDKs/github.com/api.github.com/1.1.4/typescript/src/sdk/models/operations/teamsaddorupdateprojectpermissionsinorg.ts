import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsAddOrUpdateProjectPermissionsInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
}


export class TeamsAddOrUpdateProjectPermissionsInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateProjectPermissionsInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddOrUpdateProjectPermissionsInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateProjectPermissionsInOrgRequestBody;
}


export class TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddOrUpdateProjectPermissionsInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamsAddOrUpdateProjectPermissionsInOrg403ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson;
}
