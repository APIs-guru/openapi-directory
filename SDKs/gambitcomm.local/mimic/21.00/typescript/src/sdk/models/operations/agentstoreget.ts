import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentStoreGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStoreGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentStoreGetPathParams;
}


export class AgentStoreGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  agentStoreGet200ApplicationJsonString?: string;
}
