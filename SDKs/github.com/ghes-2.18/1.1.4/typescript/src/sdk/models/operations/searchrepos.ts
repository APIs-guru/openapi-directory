import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchReposSortEnum {
    Stars = "stars",
    Forks = "forks",
    HelpWantedIssues = "help-wanted-issues",
    Updated = "updated"
}


export class SearchReposQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchReposSortEnum;
}


export class SearchRepos200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.RepoSearchResultItem })
  items: shared.RepoSearchResultItem[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchRepos503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SearchReposRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchReposQueryParams;
}


export class SearchReposResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchRepos200ApplicationJsonObject?: SearchRepos200ApplicationJson;

  @SpeakeasyMetadata()
  searchRepos503ApplicationJsonObject?: SearchRepos503ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
