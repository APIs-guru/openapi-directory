import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentStoreCopyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=otherAgent" })
  otherAgent: number;
}


export class AgentStoreCopyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentStoreCopyPathParams;
}


export class AgentStoreCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  agentStoreCopy200ApplicationJsonString?: string;
}
