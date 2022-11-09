import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsAddOrUpdateRepoPermissionsInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum {
    Pull = "pull"
,    Push = "push"
,    Admin = "admin"
,    Maintain = "maintain"
,    Triage = "triage"
}


export class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateRepoPermissionsInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddOrUpdateRepoPermissionsInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateRepoPermissionsInOrgRequestBody;
}


export class TeamsAddOrUpdateRepoPermissionsInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
