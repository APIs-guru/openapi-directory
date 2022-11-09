import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsCreateWorkflowDispatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: any;
}


export class ActionsCreateWorkflowDispatchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs" })
  inputs?: Map<string, string>;

  @Metadata({ data: "json, name=ref" })
  ref: string;
}


export class ActionsCreateWorkflowDispatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCreateWorkflowDispatchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateWorkflowDispatchRequestBody;
}


export class ActionsCreateWorkflowDispatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
