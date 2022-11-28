import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentStoreLreplacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStoreLreplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentStoreLreplacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string;
}


export class AgentStoreLreplaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  agentStoreLreplace200ApplicationJsonString?: string;
}
