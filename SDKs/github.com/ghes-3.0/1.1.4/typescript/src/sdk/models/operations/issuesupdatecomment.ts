import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesUpdateCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesUpdateCommentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;
}


export class IssuesUpdateCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesUpdateCommentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesUpdateCommentRequestBody;
}


export class IssuesUpdateCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  issueComment?: shared.IssueComment;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
