import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSshIpaliasEnablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" })
  ipaddress: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolSshIpaliasEnableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSshIpaliasEnablePathParams;
}


export class ProtocolSshIpaliasEnableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSshIpaliasEnable200ApplicationJsonString?: string;
}
