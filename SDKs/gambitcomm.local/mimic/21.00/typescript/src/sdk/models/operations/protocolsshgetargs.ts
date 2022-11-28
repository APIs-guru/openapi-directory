import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSshGetArgsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSshGetArgsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSshGetArgsPathParams;
}


export class ProtocolSshGetArgsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSshGetArgs200ApplicationJsonObject?: Map<string, any>;
}
