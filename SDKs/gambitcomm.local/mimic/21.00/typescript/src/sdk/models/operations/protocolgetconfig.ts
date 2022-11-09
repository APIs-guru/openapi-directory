import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=prot" })
  prot: string;
}


export class ProtocolGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolGetConfigPathParams;
}


export class ProtocolGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolGetConfig200ApplicationJsonObject?: Map<string, any>;
}
