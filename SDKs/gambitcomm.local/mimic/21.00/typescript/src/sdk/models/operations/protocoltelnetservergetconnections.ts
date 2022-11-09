import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetServerGetConnectionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetServerGetConnectionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetServerGetConnectionsPathParams;
}


export class ProtocolTelnetServerGetConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetServerGetConnections200ApplicationJsonInt32Integers?: number[];
}
