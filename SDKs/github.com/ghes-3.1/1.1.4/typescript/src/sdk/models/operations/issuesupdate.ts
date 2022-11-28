import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesUpdateRequestBodyLabels2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum IssuesUpdateRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}


export class IssuesUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: string;

  @SpeakeasyMetadata({ data: "json, name=assignees" })
  assignees?: string[];

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: any[];

  @SpeakeasyMetadata({ data: "json, name=milestone" })
  milestone?: any;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: IssuesUpdateRequestBodyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: any;
}


export class IssuesUpdate503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class IssuesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesUpdateRequestBody;
}


export class IssuesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  issue?: shared.Issue;

  @SpeakeasyMetadata()
  issuesUpdate503ApplicationJsonObject?: IssuesUpdate503ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
