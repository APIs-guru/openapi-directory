import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolProxyGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolProxyGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyGetTracePathParams;
}


export class ProtocolProxyGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configProxy?: shared.ConfigProxy;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
