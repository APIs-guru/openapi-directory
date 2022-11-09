import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolNetflowGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowGetTracePathParams;
}


export class ProtocolNetflowGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configNetflow?: shared.ConfigNetflow;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
