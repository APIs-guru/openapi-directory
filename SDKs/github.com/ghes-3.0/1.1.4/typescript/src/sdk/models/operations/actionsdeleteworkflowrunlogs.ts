import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDeleteWorkflowRunLogsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsDeleteWorkflowRunLogsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDeleteWorkflowRunLogsPathParams;
}


export class ActionsDeleteWorkflowRunLogsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
