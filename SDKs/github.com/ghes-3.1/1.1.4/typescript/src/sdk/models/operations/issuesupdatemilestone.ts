import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesUpdateMilestonePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=milestone_number" })
  milestoneNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesUpdateMilestoneRequestBodyStateEnum {
    Open = "open"
,    Closed = "closed"
}


export class IssuesUpdateMilestoneRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @Metadata({ data: "json, name=state" })
  state?: IssuesUpdateMilestoneRequestBodyStateEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class IssuesUpdateMilestoneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesUpdateMilestonePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesUpdateMilestoneRequestBody;
}


export class IssuesUpdateMilestoneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  milestone?: shared.Milestone;
}
