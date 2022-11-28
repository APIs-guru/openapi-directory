import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesUpdateMilestonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=milestone_number" })
  milestoneNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesUpdateMilestoneRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}


export class IssuesUpdateMilestoneRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: IssuesUpdateMilestoneRequestBodyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class IssuesUpdateMilestoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesUpdateMilestonePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesUpdateMilestoneRequestBody;
}


export class IssuesUpdateMilestoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  milestone?: shared.Milestone;
}
