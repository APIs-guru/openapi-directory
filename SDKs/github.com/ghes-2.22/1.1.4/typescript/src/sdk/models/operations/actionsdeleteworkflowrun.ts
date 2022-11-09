import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDeleteWorkflowRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsDeleteWorkflowRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDeleteWorkflowRunPathParams;
}


export class ActionsDeleteWorkflowRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
