import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSshGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSshGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshGetTracePathParams;
}


export class ProtocolSshGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configSsh?: shared.ConfigSsh;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
