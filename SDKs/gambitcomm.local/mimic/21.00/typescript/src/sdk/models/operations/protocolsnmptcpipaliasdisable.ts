import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmptcpIpaliasDisablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolSnmptcpIpaliasDisableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmptcpIpaliasDisablePathParams;
}


export class ProtocolSnmptcpIpaliasDisableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmptcpIpaliasDisable200ApplicationJsonString?: string;
}
