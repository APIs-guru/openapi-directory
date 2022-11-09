import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsCancelWorkflowRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsCancelWorkflowRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCancelWorkflowRunPathParams;
}


export class ActionsCancelWorkflowRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
