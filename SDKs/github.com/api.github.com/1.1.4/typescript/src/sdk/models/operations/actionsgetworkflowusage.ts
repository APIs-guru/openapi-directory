import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetWorkflowUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: any;
}


export class ActionsGetWorkflowUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetWorkflowUsagePathParams;
}


export class ActionsGetWorkflowUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workflowUsage?: shared.WorkflowUsage;
}
