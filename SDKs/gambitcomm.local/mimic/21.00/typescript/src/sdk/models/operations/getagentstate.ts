import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAgentStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetAgentStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentStatePathParams;
}


export class GetAgentStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAgentState200ApplicationJsonInt32Integer?: number;
}
