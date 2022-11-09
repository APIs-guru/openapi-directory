import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolDhcpSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolDhcpSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolDhcpSetConfigPathParams;
}


export class ProtocolDhcpSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolDhcpSetConfig200ApplicationJsonString?: string;
}
