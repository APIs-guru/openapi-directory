import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolWebGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolWebGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebGetTracePathParams;
}


export class ProtocolWebGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configWeb?: shared.ConfigWeb;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
