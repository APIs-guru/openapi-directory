import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsListReviewCommentsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsListReviewCommentsForRepoDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum PullsListReviewCommentsForRepoSortEnum {
    Created = "created",
    Updated = "updated",
    CreatedAt = "created_at"
}


export class PullsListReviewCommentsForRepoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: PullsListReviewCommentsForRepoDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: PullsListReviewCommentsForRepoSortEnum;
}


export class PullsListReviewCommentsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsListReviewCommentsForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: PullsListReviewCommentsForRepoQueryParams;
}


export class PullsListReviewCommentsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.PullRequestReviewComment })
  pullRequestReviewComments?: shared.PullRequestReviewComment[];
}
