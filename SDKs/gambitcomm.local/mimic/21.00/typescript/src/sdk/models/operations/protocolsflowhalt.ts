import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSflowHaltPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowHaltRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSflowHaltPathParams;
}


export class ProtocolSflowHaltResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSflowHalt200ApplicationJsonString?: string;
}
