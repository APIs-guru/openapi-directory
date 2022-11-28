import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTelnetIpaliasIsenabledPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolTelnetIpaliasIsenabledRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTelnetIpaliasIsenabledPathParams;
}


export class ProtocolTelnetIpaliasIsenabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTelnetIpaliasIsenabled200ApplicationJsonString?: string;
}
