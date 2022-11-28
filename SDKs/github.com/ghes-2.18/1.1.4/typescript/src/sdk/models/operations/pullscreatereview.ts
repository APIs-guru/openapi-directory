import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsCreateReviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsCreateReviewRequestBodyComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=side" })
  side?: string;

  @SpeakeasyMetadata({ data: "json, name=start_line" })
  startLine?: number;

  @SpeakeasyMetadata({ data: "json, name=start_side" })
  startSide?: string;
}

export enum PullsCreateReviewRequestBodyEventEnum {
    Approve = "APPROVE",
    RequestChanges = "REQUEST_CHANGES",
    Comment = "COMMENT"
}


export class PullsCreateReviewRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=comments", elemType: PullsCreateReviewRequestBodyComments })
  comments?: PullsCreateReviewRequestBodyComments[];

  @SpeakeasyMetadata({ data: "json, name=commit_id" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: PullsCreateReviewRequestBodyEventEnum;
}


export class PullsCreateReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsCreateReviewPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsCreateReviewRequestBody;
}


export class PullsCreateReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  pullRequestReview?: shared.PullRequestReview;

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
