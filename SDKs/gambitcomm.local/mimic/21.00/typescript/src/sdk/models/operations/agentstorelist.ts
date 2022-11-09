import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentStoreListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class AgentStoreListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentStoreListPathParams;
}


export class AgentStoreListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  agentStoreList200ApplicationJsonStrings?: string[];
}
