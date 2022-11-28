import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProtocolSshGetTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSshGetTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSshGetTracePathParams;
}


export class ProtocolSshGetTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configSsh?: shared.ConfigSsh;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
