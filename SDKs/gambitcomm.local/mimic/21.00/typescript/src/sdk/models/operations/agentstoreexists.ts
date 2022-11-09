import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentStoreExistsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStoreExistsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentStoreExistsPathParams;
}


export class AgentStoreExistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  agentStoreExists200ApplicationJsonString?: string;
}
