import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolDhcpGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolDhcpGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolDhcpGetArgsPathParams;
}


export class ProtocolDhcpGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolDhcpGetArgs200ApplicationJsonObject?: Map<string, any>;
}
