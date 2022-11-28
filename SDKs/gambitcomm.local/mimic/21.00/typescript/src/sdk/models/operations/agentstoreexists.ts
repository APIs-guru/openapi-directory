import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentStoreExistsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class AgentStoreExistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentStoreExistsPathParams;
}


export class AgentStoreExistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  agentStoreExists200ApplicationJsonString?: string;
}
