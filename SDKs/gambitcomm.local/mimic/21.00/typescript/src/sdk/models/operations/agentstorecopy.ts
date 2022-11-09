import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentStoreCopyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=otherAgent" })
  otherAgent: number;
}


export class AgentStoreCopyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentStoreCopyPathParams;
}


export class AgentStoreCopyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  agentStoreCopy200ApplicationJsonString?: string;
}
