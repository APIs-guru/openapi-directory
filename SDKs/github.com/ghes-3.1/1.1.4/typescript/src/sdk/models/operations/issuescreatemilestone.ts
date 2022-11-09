import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesCreateMilestonePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesCreateMilestoneRequestBodyStateEnum {
    Open = "open"
,    Closed = "closed"
}


export class IssuesCreateMilestoneRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @Metadata({ data: "json, name=state" })
  state?: IssuesCreateMilestoneRequestBodyStateEnum;

  @Metadata({ data: "json, name=title" })
  title: string;
}


export class IssuesCreateMilestoneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesCreateMilestonePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesCreateMilestoneRequestBody;
}


export class IssuesCreateMilestoneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  milestone?: shared.Milestone;

  @Metadata()
  validationError?: shared.ValidationError;
}
