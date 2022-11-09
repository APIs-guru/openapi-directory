import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetJobForWorkflowRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=job_id" })
  jobId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsGetJobForWorkflowRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetJobForWorkflowRunPathParams;
}


export class ActionsGetJobForWorkflowRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  job?: shared.Job;
}
