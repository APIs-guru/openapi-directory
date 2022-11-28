import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDisableWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: any;
}


export class ActionsDisableWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDisableWorkflowPathParams;
}


export class ActionsDisableWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
