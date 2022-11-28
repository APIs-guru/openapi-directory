import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolNetflowGetArgsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowGetArgsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolNetflowGetArgsPathParams;
}


export class ProtocolNetflowGetArgsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolNetflowGetArgs200ApplicationJsonObject?: Map<string, any>;
}
