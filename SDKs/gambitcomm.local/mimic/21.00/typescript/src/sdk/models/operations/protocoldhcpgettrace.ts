import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolDhcpGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolDhcpGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolDhcpGetTracePathParams;
}


export class ProtocolDhcpGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configDhcp?: shared.ConfigDhcp;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
