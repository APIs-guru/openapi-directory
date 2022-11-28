import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesCreateMilestonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesCreateMilestoneRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}


export class IssuesCreateMilestoneRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: IssuesCreateMilestoneRequestBodyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}


export class IssuesCreateMilestoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesCreateMilestonePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesCreateMilestoneRequestBody;
}


export class IssuesCreateMilestoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  milestone?: shared.Milestone;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
