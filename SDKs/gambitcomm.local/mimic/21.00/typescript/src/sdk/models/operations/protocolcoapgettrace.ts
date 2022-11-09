import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolCoapGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolCoapGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolCoapGetTracePathParams;
}


export class ProtocolCoapGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configCoap?: shared.ConfigCoap;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
