import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesCreateCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesCreateCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class IssuesCreateCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesCreateCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesCreateCommentRequestBody;
}


export class IssuesCreateCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  issueComment?: shared.IssueComment;

  @Metadata()
  validationError?: shared.ValidationError;
}
