import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolTodGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTodGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTodGetTracePathParams;
}


export class ProtocolTodGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configTod?: shared.ConfigTod;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
