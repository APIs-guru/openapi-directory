import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolWebPortAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolWebPortAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolWebPortAddPathParams;
}


export class ProtocolWebPortAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolWebPortAdd200ApplicationJsonString?: string;
}
