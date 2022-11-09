import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsListReposAccessibleToInstallationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListReposAccessibleToInstallationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppsListReposAccessibleToInstallationQueryParams;
}


export class AppsListReposAccessibleToInstallation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories: shared.Repository[];

  @Metadata({ data: "json, name=repository_selection" })
  repositorySelection?: string;

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class AppsListReposAccessibleToInstallationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  appsListReposAccessibleToInstallation200ApplicationJsonObject?: AppsListReposAccessibleToInstallation200ApplicationJson;

  @Metadata()
  basicError?: shared.BasicError;
}
