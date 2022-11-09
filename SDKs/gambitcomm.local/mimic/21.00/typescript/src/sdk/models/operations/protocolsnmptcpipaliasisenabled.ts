import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmptcpIpaliasIsenabledPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolSnmptcpIpaliasIsenabledRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmptcpIpaliasIsenabledPathParams;
}


export class ProtocolSnmptcpIpaliasIsenabledResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmptcpIpaliasIsenabled200ApplicationJsonString?: string;
}
