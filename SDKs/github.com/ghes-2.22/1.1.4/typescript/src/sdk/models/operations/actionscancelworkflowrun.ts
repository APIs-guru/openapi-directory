import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsCancelWorkflowRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsCancelWorkflowRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsCancelWorkflowRunPathParams;
}


export class ActionsCancelWorkflowRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsCancelWorkflowRun202ApplicationJsonObject?: Map<string, any>;
}
