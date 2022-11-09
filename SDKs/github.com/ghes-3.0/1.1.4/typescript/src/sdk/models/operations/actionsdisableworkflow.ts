import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDisableWorkflowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: any;
}


export class ActionsDisableWorkflowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDisableWorkflowPathParams;
}


export class ActionsDisableWorkflowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
