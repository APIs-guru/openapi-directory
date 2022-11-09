import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxyPortListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolProxyPortListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyPortListPathParams;
}


export class ProtocolProxyPortListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxyPortList200ApplicationJsonInt32Integers?: number[];
}
