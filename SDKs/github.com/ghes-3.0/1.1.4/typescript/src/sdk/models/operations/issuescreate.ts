import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesCreateRequestBodyLabels2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class IssuesCreateRequestBody extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=title" })
  title: any;
}


export class IssuesCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesCreateRequestBody;
}


export class IssuesCreate503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class IssuesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  issue?: shared.Issue;

  @Metadata()
  issuesCreate503ApplicationJsonObject?: IssuesCreate503ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
