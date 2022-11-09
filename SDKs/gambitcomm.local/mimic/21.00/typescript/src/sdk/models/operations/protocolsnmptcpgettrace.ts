import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSnmptcpGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmptcpGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmptcpGetTracePathParams;
}


export class ProtocolSnmptcpGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configSnmptcp?: shared.ConfigSnmptcp;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
