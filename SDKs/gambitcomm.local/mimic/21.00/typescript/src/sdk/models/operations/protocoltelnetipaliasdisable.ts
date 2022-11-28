import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTelnetIpaliasDisablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolTelnetIpaliasDisableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTelnetIpaliasDisablePathParams;
}


export class ProtocolTelnetIpaliasDisableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTelnetIpaliasDisable200ApplicationJsonString?: string;
}
