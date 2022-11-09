import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSshIpaliasIsenabledPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolSshIpaliasIsenabledRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshIpaliasIsenabledPathParams;
}


export class ProtocolSshIpaliasIsenabledResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSshIpaliasIsenabled200ApplicationJsonString?: string;
}
