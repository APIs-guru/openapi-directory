import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentStoreUnsetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStoreUnsetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentStoreUnsetPathParams;
}


export class AgentStoreUnsetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  agentStoreUnset200ApplicationJsonString?: string;
}
