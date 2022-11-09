import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsCreateForIssuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReactionsCreateForIssueRequestBodyContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsCreateForIssueRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: ReactionsCreateForIssueRequestBodyContentEnum;
}


export class ReactionsCreateForIssueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsCreateForIssuePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForIssueRequestBody;
}


export class ReactionsCreateForIssue415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReactionsCreateForIssueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reaction?: shared.Reaction;

  @Metadata()
  reactionsCreateForIssue415ApplicationJsonObject?: ReactionsCreateForIssue415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
