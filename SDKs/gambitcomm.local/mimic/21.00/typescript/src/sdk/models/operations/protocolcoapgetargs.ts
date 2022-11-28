import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolCoapGetArgsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolCoapGetArgsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolCoapGetArgsPathParams;
}


export class ProtocolCoapGetArgsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolCoapGetArgs200ApplicationJsonObject?: Map<string, any>;
}
