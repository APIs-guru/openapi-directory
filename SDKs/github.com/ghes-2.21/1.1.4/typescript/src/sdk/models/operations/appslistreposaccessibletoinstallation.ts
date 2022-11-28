import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsListReposAccessibleToInstallationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListReposAccessibleToInstallationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsListReposAccessibleToInstallation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories: shared.Repository[];

  @SpeakeasyMetadata({ data: "json, name=repository_selection" })
  repositorySelection?: string;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class AppsListReposAccessibleToInstallationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppsListReposAccessibleToInstallationQueryParams;

  @SpeakeasyMetadata()
  headers: AppsListReposAccessibleToInstallationHeaders;
}


export class AppsListReposAccessibleToInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appsListReposAccessibleToInstallation200ApplicationJsonObject?: AppsListReposAccessibleToInstallation200ApplicationJson;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
