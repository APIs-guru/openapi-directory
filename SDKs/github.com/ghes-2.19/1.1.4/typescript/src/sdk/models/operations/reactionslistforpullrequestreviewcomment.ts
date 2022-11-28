import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReactionsListForPullRequestReviewCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReactionsListForPullRequestReviewCommentContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}


export class ReactionsListForPullRequestReviewCommentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" })
  content?: ReactionsListForPullRequestReviewCommentContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReactionsListForPullRequestReviewComment415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ReactionsListForPullRequestReviewCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsListForPullRequestReviewCommentPathParams;

  @SpeakeasyMetadata()
  queryParams: ReactionsListForPullRequestReviewCommentQueryParams;
}


export class ReactionsListForPullRequestReviewCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Reaction })
  reactions?: shared.Reaction[];

  @SpeakeasyMetadata()
  reactionsListForPullRequestReviewComment415ApplicationJsonObject?: ReactionsListForPullRequestReviewComment415ApplicationJson;
}
