import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsCreateReviewCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsCreateReviewCommentRequestBodySideEnum {
    Left = "LEFT",
    Right = "RIGHT"
}

export enum PullsCreateReviewCommentRequestBodyStartSideEnum {
    Left = "LEFT",
    Right = "RIGHT",
    Side = "side"
}


export class PullsCreateReviewCommentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=commit_id" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=in_reply_to" })
  inReplyTo?: number;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=side" })
  side?: PullsCreateReviewCommentRequestBodySideEnum;

  @SpeakeasyMetadata({ data: "json, name=start_line" })
  startLine?: number;

  @SpeakeasyMetadata({ data: "json, name=start_side" })
  startSide?: PullsCreateReviewCommentRequestBodyStartSideEnum;
}


export class PullsCreateReviewCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsCreateReviewCommentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsCreateReviewCommentRequestBody;
}


export class PullsCreateReviewCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  pullRequestReviewComment?: shared.PullRequestReviewComment;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
