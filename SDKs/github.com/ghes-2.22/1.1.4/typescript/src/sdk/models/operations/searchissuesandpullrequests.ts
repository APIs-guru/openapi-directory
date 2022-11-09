import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchIssuesAndPullRequestsSortEnum {
    Comments = "comments"
,    Reactions = "reactions"
,    ReactionsPlus1 = "reactions-+1"
,    Reactions1 = "reactions--1"
,    ReactionsSmile = "reactions-smile"
,    ReactionsThinkingFace = "reactions-thinking_face"
,    ReactionsHeart = "reactions-heart"
,    ReactionsTada = "reactions-tada"
,    Interactions = "interactions"
,    Created = "created"
,    Updated = "updated"
}


export class SearchIssuesAndPullRequestsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchIssuesAndPullRequestsSortEnum;
}


export class SearchIssuesAndPullRequestsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchIssuesAndPullRequestsQueryParams;
}


export class SearchIssuesAndPullRequests200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @Metadata({ data: "json, name=items", elemType: shared.IssueSearchResultItem })
  items: shared.IssueSearchResultItem[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchIssuesAndPullRequests503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SearchIssuesAndPullRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  searchIssuesAndPullRequests200ApplicationJsonObject?: SearchIssuesAndPullRequests200ApplicationJson;

  @Metadata()
  searchIssuesAndPullRequests503ApplicationJsonObject?: SearchIssuesAndPullRequests503ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
