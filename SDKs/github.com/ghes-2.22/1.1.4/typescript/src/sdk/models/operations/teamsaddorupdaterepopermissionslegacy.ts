import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsAddOrUpdateRepoPermissionsLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}


export class TeamsAddOrUpdateRepoPermissionsLegacyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateRepoPermissionsLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddOrUpdateRepoPermissionsLegacyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBody;
}


export class TeamsAddOrUpdateRepoPermissionsLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
