import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsAddOrUpdateProjectPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsAddOrUpdateProjectPermissionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}

export enum TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}


export class TeamsAddOrUpdateProjectPermissionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateProjectPermissions403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddOrUpdateProjectPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddOrUpdateProjectPermissionsPathParams;

  @SpeakeasyMetadata()
  headers: TeamsAddOrUpdateProjectPermissionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateProjectPermissionsRequestBody;
}


export class TeamsAddOrUpdateProjectPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamsAddOrUpdateProjectPermissions403ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissions403ApplicationJson;
}
