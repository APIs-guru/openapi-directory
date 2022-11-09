import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentStoreLreplacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStoreLreplaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentStoreLreplacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: string;
}


export class AgentStoreLreplaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  agentStoreLreplace200ApplicationJsonString?: string;
}
