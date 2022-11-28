import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsReRunWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsReRunWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsReRunWorkflowPathParams;
}


export class ActionsReRunWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
