import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTelnetServerGetConnectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetServerGetConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTelnetServerGetConnectionsPathParams;
}


export class ProtocolTelnetServerGetConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTelnetServerGetConnections200ApplicationJsonInt32Integers?: number[];
}
