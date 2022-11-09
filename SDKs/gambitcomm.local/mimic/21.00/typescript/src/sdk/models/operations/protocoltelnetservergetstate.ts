import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetServerGetStatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetServerGetStateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetServerGetStatePathParams;
}


export class ProtocolTelnetServerGetStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetServerGetState200ApplicationJsonInt32Integers?: number[];
}
