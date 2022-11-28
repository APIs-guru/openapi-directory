import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSflowHaltPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowHaltRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSflowHaltPathParams;
}


export class ProtocolSflowHaltResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSflowHalt200ApplicationJsonString?: string;
}
