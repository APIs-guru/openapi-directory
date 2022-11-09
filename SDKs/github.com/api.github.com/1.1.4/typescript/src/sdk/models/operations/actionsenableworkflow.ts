import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsEnableWorkflowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: any;
}


export class ActionsEnableWorkflowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsEnableWorkflowPathParams;
}


export class ActionsEnableWorkflowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
