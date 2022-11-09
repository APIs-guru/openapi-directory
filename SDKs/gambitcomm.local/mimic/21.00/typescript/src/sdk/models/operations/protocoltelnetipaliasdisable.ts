import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetIpaliasDisablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolTelnetIpaliasDisableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetIpaliasDisablePathParams;
}


export class ProtocolTelnetIpaliasDisableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetIpaliasDisable200ApplicationJsonString?: string;
}
