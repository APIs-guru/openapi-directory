import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolWebPortStopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolWebPortStopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolWebPortStopPathParams;
}


export class ProtocolWebPortStopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolWebPortStop200ApplicationJsonString?: string;
}
