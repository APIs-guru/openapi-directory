import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesUpdateCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesUpdateCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class IssuesUpdateCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesUpdateCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesUpdateCommentRequestBody;
}


export class IssuesUpdateCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  issueComment?: shared.IssueComment;

  @Metadata()
  validationError?: shared.ValidationError;
}
