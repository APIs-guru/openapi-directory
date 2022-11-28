import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolWebSetTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolWebSetTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolWebSetTracePathParams;
}


export class ProtocolWebSetTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolWebSetTrace200ApplicationJsonString?: string;
}
