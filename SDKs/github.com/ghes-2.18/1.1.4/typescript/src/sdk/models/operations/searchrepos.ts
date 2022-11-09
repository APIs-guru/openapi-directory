import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchReposSortEnum {
    Stars = "stars"
,    Forks = "forks"
,    HelpWantedIssues = "help-wanted-issues"
,    Updated = "updated"
}


export class SearchReposQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchReposSortEnum;
}


export class SearchReposRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchReposQueryParams;
}


export class SearchRepos200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @Metadata({ data: "json, name=items", elemType: shared.RepoSearchResultItem })
  items: shared.RepoSearchResultItem[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchRepos503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SearchReposResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchRepos200ApplicationJsonObject?: SearchRepos200ApplicationJson;

  @Metadata()
  searchRepos503ApplicationJsonObject?: SearchRepos503ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
