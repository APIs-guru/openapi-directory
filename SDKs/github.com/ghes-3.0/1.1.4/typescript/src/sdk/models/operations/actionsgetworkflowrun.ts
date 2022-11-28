import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetWorkflowRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsGetWorkflowRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetWorkflowRunPathParams;
}


export class ActionsGetWorkflowRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workflowRun?: shared.WorkflowRun;
}
