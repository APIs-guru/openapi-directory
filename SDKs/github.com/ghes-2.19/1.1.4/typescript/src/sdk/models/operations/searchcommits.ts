import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchCommitsSortEnum {
    AuthorDate = "author-date"
,    CommitterDate = "committer-date"
}


export class SearchCommitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchCommitsSortEnum;
}


export class SearchCommitsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchCommitsQueryParams;
}


export class SearchCommits200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @Metadata({ data: "json, name=items", elemType: shared.CommitSearchResultItem })
  items: shared.CommitSearchResultItem[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchCommits415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class SearchCommitsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchCommits200ApplicationJsonObject?: SearchCommits200ApplicationJson;

  @Metadata()
  searchCommits415ApplicationJsonObject?: SearchCommits415ApplicationJson;
}
