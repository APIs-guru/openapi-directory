import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsListReviewCommentsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsListReviewCommentsForRepoDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum PullsListReviewCommentsForRepoSortEnum {
    Created = "created"
,    Updated = "updated"
,    CreatedAt = "created_at"
}


export class PullsListReviewCommentsForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: PullsListReviewCommentsForRepoDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: PullsListReviewCommentsForRepoSortEnum;
}


export class PullsListReviewCommentsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsListReviewCommentsForRepoPathParams;

  @Metadata()
  queryParams: PullsListReviewCommentsForRepoQueryParams;
}


export class PullsListReviewCommentsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.PullRequestReviewComment })
  pullRequestReviewComments?: shared.PullRequestReviewComment[];
}
