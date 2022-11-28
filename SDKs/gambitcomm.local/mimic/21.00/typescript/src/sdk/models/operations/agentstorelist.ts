import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentStoreListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class AgentStoreListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentStoreListPathParams;
}


export class AgentStoreListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  agentStoreList200ApplicationJsonStrings?: string[];
}
