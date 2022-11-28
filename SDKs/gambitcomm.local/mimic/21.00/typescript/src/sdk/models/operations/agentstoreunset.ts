import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentStoreUnsetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStoreUnsetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentStoreUnsetPathParams;
}


export class AgentStoreUnsetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  agentStoreUnset200ApplicationJsonString?: string;
}
