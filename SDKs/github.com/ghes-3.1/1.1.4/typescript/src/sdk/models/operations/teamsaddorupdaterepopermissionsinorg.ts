import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsAddOrUpdateRepoPermissionsInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin",
    Maintain = "maintain",
    Triage = "triage"
}


export class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateRepoPermissionsInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddOrUpdateRepoPermissionsInOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateRepoPermissionsInOrgRequestBody;
}


export class TeamsAddOrUpdateRepoPermissionsInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
