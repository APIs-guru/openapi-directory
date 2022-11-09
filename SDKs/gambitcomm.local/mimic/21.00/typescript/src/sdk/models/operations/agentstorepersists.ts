import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentStorePersistsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStorePersistsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentStorePersistsPathParams;
}


export class AgentStorePersistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  agentStorePersists200ApplicationJsonString?: string;
}
