import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsCreateWorkflowDispatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: any;
}


export class ActionsCreateWorkflowDispatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs" })
  inputs?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;
}


export class ActionsCreateWorkflowDispatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsCreateWorkflowDispatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateWorkflowDispatchRequestBody;
}


export class ActionsCreateWorkflowDispatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
