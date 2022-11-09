import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesUpdateRequestBodyLabels2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum IssuesUpdateRequestBodyStateEnum {
    Open = "open"
,    Closed = "closed"
}


export class IssuesUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignee" })
  assignee?: string;

  @Metadata({ data: "json, name=assignees" })
  assignees?: string[];

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: any[];

  @Metadata({ data: "json, name=milestone" })
  milestone?: any;

  @Metadata({ data: "json, name=state" })
  state?: IssuesUpdateRequestBodyStateEnum;

  @Metadata({ data: "json, name=title" })
  title?: any;
}


export class IssuesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesUpdateRequestBody;
}


export class IssuesUpdate503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class IssuesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  issue?: shared.Issue;

  @Metadata()
  issuesUpdate503ApplicationJsonObject?: IssuesUpdate503ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
