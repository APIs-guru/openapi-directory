import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolIpmiGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolIpmiGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolIpmiGetTracePathParams;
}


export class ProtocolIpmiGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configIpmi?: shared.ConfigIpmi;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
