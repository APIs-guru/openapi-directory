import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsAddOrUpdateRepoPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}


export class TeamsAddOrUpdateRepoPermissionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateRepoPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddOrUpdateRepoPermissionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateRepoPermissionsRequestBody;
}


export class TeamsAddOrUpdateRepoPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
