import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSflowGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSflowGetTracePathParams;
}


export class ProtocolSflowGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configSflow?: shared.ConfigSflow;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
