import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsCreateForPullRequestReviewCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsCreateForPullRequestReviewCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum;
}


export class ReactionsCreateForPullRequestReviewCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsCreateForPullRequestReviewCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForPullRequestReviewCommentRequestBody;
}


export class ReactionsCreateForPullRequestReviewComment415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReactionsCreateForPullRequestReviewCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reaction?: shared.Reaction;

  @Metadata()
  reactionsCreateForPullRequestReviewComment415ApplicationJsonObject?: ReactionsCreateForPullRequestReviewComment415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
