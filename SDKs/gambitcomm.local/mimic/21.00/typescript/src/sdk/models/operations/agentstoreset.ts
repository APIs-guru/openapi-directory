import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentStoreSetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=persist" })
  persist: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStoreSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentStoreSetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string;
}


export class AgentStoreSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  agentStoreSet200ApplicationJsonString?: string;
}
