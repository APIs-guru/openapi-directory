import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDownloadWorkflowRunLogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsDownloadWorkflowRunLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDownloadWorkflowRunLogsPathParams;
}


export class ActionsDownloadWorkflowRunLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
