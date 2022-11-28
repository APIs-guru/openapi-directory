import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentRemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class AgentRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentRemovePathParams;
}


export class AgentRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  agentRemove200ApplicationJsonString?: string;
}
