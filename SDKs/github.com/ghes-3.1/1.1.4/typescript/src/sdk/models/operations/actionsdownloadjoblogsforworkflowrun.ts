import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDownloadJobLogsForWorkflowRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job_id" })
  jobId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsDownloadJobLogsForWorkflowRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDownloadJobLogsForWorkflowRunPathParams;
}


export class ActionsDownloadJobLogsForWorkflowRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
