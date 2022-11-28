import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolDhcpParamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolDhcpParamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolDhcpParamsPathParams;
}


export class ProtocolDhcpParamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolDhcpParams200ApplicationJsonObjects?: Map<string, any>[];
}
