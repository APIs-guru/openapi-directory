import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsListInstallationReposForAuthenticatedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;
}


export class AppsListInstallationReposForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListInstallationReposForAuthenticatedUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories: shared.Repository[];

  @SpeakeasyMetadata({ data: "json, name=repository_selection" })
  repositorySelection?: string;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class AppsListInstallationReposForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsListInstallationReposForAuthenticatedUserPathParams;

  @SpeakeasyMetadata()
  queryParams: AppsListInstallationReposForAuthenticatedUserQueryParams;
}


export class AppsListInstallationReposForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appsListInstallationReposForAuthenticatedUser200ApplicationJsonObject?: AppsListInstallationReposForAuthenticatedUser200ApplicationJson;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
