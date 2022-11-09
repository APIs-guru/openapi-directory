import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesGetMilestonePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=milestone_number" })
  milestoneNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesGetMilestoneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesGetMilestonePathParams;
}


export class IssuesGetMilestoneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  milestone?: shared.Milestone;
}
