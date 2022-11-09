import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsAddOrUpdateRepoPermissionsLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum {
    Pull = "pull"
,    Push = "push"
,    Admin = "admin"
}


export class TeamsAddOrUpdateRepoPermissionsLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateRepoPermissionsLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddOrUpdateRepoPermissionsLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBody;
}


export class TeamsAddOrUpdateRepoPermissionsLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  validationError?: shared.ValidationError;
}
