import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsCreateReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsCreateReviewRequestBodyComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=line" })
  line?: number;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=side" })
  side?: string;

  @Metadata({ data: "json, name=start_line" })
  startLine?: number;

  @Metadata({ data: "json, name=start_side" })
  startSide?: string;
}

export enum PullsCreateReviewRequestBodyEventEnum {
    Approve = "APPROVE"
,    RequestChanges = "REQUEST_CHANGES"
,    Comment = "COMMENT"
}


export class PullsCreateReviewRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=comments", elemType: operations.PullsCreateReviewRequestBodyComments })
  comments?: PullsCreateReviewRequestBodyComments[];

  @Metadata({ data: "json, name=commit_id" })
  commitId?: string;

  @Metadata({ data: "json, name=event" })
  event?: PullsCreateReviewRequestBodyEventEnum;
}


export class PullsCreateReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsCreateReviewPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsCreateReviewRequestBody;
}


export class PullsCreateReviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  pullRequestReview?: shared.PullRequestReview;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
