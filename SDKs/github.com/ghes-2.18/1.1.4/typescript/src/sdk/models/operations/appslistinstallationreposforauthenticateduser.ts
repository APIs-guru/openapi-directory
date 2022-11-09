import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsListInstallationReposForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;
}


export class AppsListInstallationReposForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListInstallationReposForAuthenticatedUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsListInstallationReposForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsListInstallationReposForAuthenticatedUserPathParams;

  @Metadata()
  queryParams: AppsListInstallationReposForAuthenticatedUserQueryParams;

  @Metadata()
  headers: AppsListInstallationReposForAuthenticatedUserHeaders;
}


export class AppsListInstallationReposForAuthenticatedUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories: shared.Repository[];

  @Metadata({ data: "json, name=repository_selection" })
  repositorySelection?: string;

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class AppsListInstallationReposForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  appsListInstallationReposForAuthenticatedUser200ApplicationJsonObject?: AppsListInstallationReposForAuthenticatedUser200ApplicationJson;

  @Metadata()
  basicError?: shared.BasicError;
}
