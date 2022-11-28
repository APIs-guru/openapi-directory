import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentStorePersistsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStorePersistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentStorePersistsPathParams;
}


export class AgentStorePersistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  agentStorePersists200ApplicationJsonString?: string;
}
