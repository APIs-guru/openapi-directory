import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetIpaliasEnablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolTelnetIpaliasEnableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetIpaliasEnablePathParams;
}


export class ProtocolTelnetIpaliasEnableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetIpaliasEnable200ApplicationJsonString?: string;
}
