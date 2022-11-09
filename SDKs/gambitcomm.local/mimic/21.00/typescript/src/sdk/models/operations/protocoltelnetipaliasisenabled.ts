import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetIpaliasIsenabledPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolTelnetIpaliasIsenabledRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetIpaliasIsenabledPathParams;
}


export class ProtocolTelnetIpaliasIsenabledResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetIpaliasIsenabled200ApplicationJsonString?: string;
}
