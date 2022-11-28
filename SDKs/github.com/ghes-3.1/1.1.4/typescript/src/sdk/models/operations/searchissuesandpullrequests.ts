import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchIssuesAndPullRequestsSortEnum {
    Comments = "comments",
    Reactions = "reactions",
    ReactionsPlus1 = "reactions-+1",
    Reactions1 = "reactions--1",
    ReactionsSmile = "reactions-smile",
    ReactionsThinkingFace = "reactions-thinking_face",
    ReactionsHeart = "reactions-heart",
    ReactionsTada = "reactions-tada",
    Interactions = "interactions",
    Created = "created",
    Updated = "updated"
}


export class SearchIssuesAndPullRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchIssuesAndPullRequestsSortEnum;
}


export class SearchIssuesAndPullRequests200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.IssueSearchResultItem })
  items: shared.IssueSearchResultItem[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchIssuesAndPullRequests503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SearchIssuesAndPullRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchIssuesAndPullRequestsQueryParams;
}


export class SearchIssuesAndPullRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  searchIssuesAndPullRequests200ApplicationJsonObject?: SearchIssuesAndPullRequests200ApplicationJson;

  @SpeakeasyMetadata()
  searchIssuesAndPullRequests503ApplicationJsonObject?: SearchIssuesAndPullRequests503ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
