import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesCreateRequestBodyLabels2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class IssuesCreateRequestBody extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: any;
}


export class IssuesCreate503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class IssuesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesCreateRequestBody;
}


export class IssuesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  issue?: shared.Issue;

  @SpeakeasyMetadata()
  issuesCreate503ApplicationJsonObject?: IssuesCreate503ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
