import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAgentStatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetAgentStateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAgentStatePathParams;
}


export class GetAgentStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAgentState200ApplicationJsonInt32Integer?: number;
}
