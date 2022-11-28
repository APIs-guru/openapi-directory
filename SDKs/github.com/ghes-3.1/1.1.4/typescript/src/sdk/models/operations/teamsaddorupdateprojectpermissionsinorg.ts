import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsAddOrUpdateProjectPermissionsInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}


export class TeamsAddOrUpdateProjectPermissionsInOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddOrUpdateProjectPermissionsInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddOrUpdateProjectPermissionsInOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateProjectPermissionsInOrgRequestBody;
}


export class TeamsAddOrUpdateProjectPermissionsInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamsAddOrUpdateProjectPermissionsInOrg403ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson;
}
