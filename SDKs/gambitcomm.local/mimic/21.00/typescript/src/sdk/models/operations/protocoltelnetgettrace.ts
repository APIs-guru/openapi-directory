import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolTelnetGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetGetTracePathParams;
}


export class ProtocolTelnetGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configTelnet?: shared.ConfigTelnet;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
