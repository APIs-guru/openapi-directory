import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolDhcpSetTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolDhcpSetTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolDhcpSetTracePathParams;
}


export class ProtocolDhcpSetTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolDhcpSetTrace200ApplicationJsonString?: string;
}
