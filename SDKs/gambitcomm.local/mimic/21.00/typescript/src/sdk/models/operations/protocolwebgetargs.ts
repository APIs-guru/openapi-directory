import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolWebGetArgsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolWebGetArgsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolWebGetArgsPathParams;
}


export class ProtocolWebGetArgsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolWebGetArgs200ApplicationJsonObject?: Map<string, any>;
}
