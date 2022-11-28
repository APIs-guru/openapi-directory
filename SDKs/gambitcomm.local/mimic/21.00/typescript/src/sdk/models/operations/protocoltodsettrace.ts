import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTodSetTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolTodSetTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTodSetTracePathParams;
}


export class ProtocolTodSetTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTodSetTrace200ApplicationJsonString?: string;
}
