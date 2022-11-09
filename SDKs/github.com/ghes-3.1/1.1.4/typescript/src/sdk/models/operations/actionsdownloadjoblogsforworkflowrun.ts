import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDownloadJobLogsForWorkflowRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=job_id" })
  jobId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsDownloadJobLogsForWorkflowRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDownloadJobLogsForWorkflowRunPathParams;
}


export class ActionsDownloadJobLogsForWorkflowRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
