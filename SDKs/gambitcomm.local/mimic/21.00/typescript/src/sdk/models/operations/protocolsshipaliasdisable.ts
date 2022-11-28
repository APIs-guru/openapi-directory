import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSshIpaliasDisablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolSshIpaliasDisableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSshIpaliasDisablePathParams;
}


export class ProtocolSshIpaliasDisableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSshIpaliasDisable200ApplicationJsonString?: string;
}
