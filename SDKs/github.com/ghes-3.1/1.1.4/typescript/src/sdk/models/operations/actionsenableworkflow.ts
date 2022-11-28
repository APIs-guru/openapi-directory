import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsEnableWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: any;
}


export class ActionsEnableWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsEnableWorkflowPathParams;
}


export class ActionsEnableWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
