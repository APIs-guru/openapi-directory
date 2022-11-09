import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetWorkflowRunUsagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsGetWorkflowRunUsageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetWorkflowRunUsagePathParams;
}


export class ActionsGetWorkflowRunUsageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  workflowRunUsage?: shared.WorkflowRunUsage;
}
