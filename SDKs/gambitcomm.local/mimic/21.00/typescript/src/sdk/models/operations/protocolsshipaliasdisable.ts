import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSshIpaliasDisablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolSshIpaliasDisableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshIpaliasDisablePathParams;
}


export class ProtocolSshIpaliasDisableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSshIpaliasDisable200ApplicationJsonString?: string;
}
