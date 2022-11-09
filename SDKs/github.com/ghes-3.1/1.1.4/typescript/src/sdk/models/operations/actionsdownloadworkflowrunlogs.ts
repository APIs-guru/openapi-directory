import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDownloadWorkflowRunLogsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsDownloadWorkflowRunLogsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDownloadWorkflowRunLogsPathParams;
}


export class ActionsDownloadWorkflowRunLogsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
