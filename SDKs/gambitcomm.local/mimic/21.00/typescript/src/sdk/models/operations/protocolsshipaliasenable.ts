import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSshIpaliasEnablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolSshIpaliasEnableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshIpaliasEnablePathParams;
}


export class ProtocolSshIpaliasEnableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSshIpaliasEnable200ApplicationJsonString?: string;
}
