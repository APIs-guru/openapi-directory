import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsCreateForCommitCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReactionsCreateForCommitCommentRequestBodyContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsCreateForCommitCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: ReactionsCreateForCommitCommentRequestBodyContentEnum;
}


export class ReactionsCreateForCommitCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsCreateForCommitCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForCommitCommentRequestBody;
}


export class ReactionsCreateForCommitComment415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReactionsCreateForCommitCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reaction?: shared.Reaction;

  @Metadata()
  reactionsCreateForCommitComment415ApplicationJsonObject?: ReactionsCreateForCommitComment415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
