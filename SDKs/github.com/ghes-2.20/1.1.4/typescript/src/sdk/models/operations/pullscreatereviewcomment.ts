import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsCreateReviewCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsCreateReviewCommentRequestBodySideEnum {
    Left = "LEFT"
,    Right = "RIGHT"
}

export enum PullsCreateReviewCommentRequestBodyStartSideEnum {
    Left = "LEFT"
,    Right = "RIGHT"
,    Side = "side"
}


export class PullsCreateReviewCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=commit_id" })
  commitId?: string;

  @Metadata({ data: "json, name=in_reply_to" })
  inReplyTo?: number;

  @Metadata({ data: "json, name=line" })
  line?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=side" })
  side?: PullsCreateReviewCommentRequestBodySideEnum;

  @Metadata({ data: "json, name=start_line" })
  startLine?: number;

  @Metadata({ data: "json, name=start_side" })
  startSide?: PullsCreateReviewCommentRequestBodyStartSideEnum;
}


export class PullsCreateReviewCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsCreateReviewCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsCreateReviewCommentRequestBody;
}


export class PullsCreateReviewCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  pullRequestReviewComment?: shared.PullRequestReviewComment;

  @Metadata()
  validationError?: shared.ValidationError;
}
