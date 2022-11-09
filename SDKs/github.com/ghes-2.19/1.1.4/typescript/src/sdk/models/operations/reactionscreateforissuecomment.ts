import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsCreateForIssueCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReactionsCreateForIssueCommentRequestBodyContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsCreateForIssueCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: ReactionsCreateForIssueCommentRequestBodyContentEnum;
}


export class ReactionsCreateForIssueCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsCreateForIssueCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForIssueCommentRequestBody;
}


export class ReactionsCreateForIssueComment415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReactionsCreateForIssueCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reaction?: shared.Reaction;

  @Metadata()
  reactionsCreateForIssueComment415ApplicationJsonObject?: ReactionsCreateForIssueComment415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
