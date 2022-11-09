import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsAddOrUpdateProjectPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsAddOrUpdateProjectPermissionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}

export enum TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
}


export class TeamsAddOrUpdateProjectPermissionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateProjectPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddOrUpdateProjectPermissionsPathParams;

  @Metadata()
  headers: TeamsAddOrUpdateProjectPermissionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateProjectPermissionsRequestBody;
}


export class TeamsAddOrUpdateProjectPermissions403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddOrUpdateProjectPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamsAddOrUpdateProjectPermissions403ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissions403ApplicationJson;
}
