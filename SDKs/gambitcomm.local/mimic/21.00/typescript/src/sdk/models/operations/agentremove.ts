import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentRemovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class AgentRemoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentRemovePathParams;
}


export class AgentRemoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  agentRemove200ApplicationJsonString?: string;
}
