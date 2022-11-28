import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTelnetServerGetStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetServerGetStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTelnetServerGetStatePathParams;
}


export class ProtocolTelnetServerGetStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTelnetServerGetState200ApplicationJsonInt32Integers?: number[];
}
