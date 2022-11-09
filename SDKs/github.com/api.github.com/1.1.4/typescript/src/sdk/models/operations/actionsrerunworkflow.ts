import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsReRunWorkflowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsReRunWorkflowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsReRunWorkflowPathParams;
}


export class ActionsReRunWorkflowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
