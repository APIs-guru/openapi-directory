import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsUsernamePermissionsRepositoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernamePermissionsRepositoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetTeamsUsernamePermissionsRepositoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetTeamsUsernamePermissionsRepositoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsUsernamePermissionsRepositoriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTeamsUsernamePermissionsRepositoriesQueryParams;

  @SpeakeasyMetadata()
  security: GetTeamsUsernamePermissionsRepositoriesSecurity;
}


export class GetTeamsUsernamePermissionsRepositoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
