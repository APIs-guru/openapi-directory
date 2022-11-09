import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsAddOrUpdateRepoPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum {
    Pull = "pull"
,    Push = "push"
,    Admin = "admin"
}


export class TeamsAddOrUpdateRepoPermissionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateRepoPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddOrUpdateRepoPermissionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateRepoPermissionsRequestBody;
}


export class TeamsAddOrUpdateRepoPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
