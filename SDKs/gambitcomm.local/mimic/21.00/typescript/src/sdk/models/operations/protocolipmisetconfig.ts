import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolIpmiSetConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolIpmiSetConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolIpmiSetConfigPathParams;
}


export class ProtocolIpmiSetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolIpmiSetConfig200ApplicationJsonString?: string;
}
