import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolNetflowHaltPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowHaltRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolNetflowHaltPathParams;
}


export class ProtocolNetflowHaltResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolNetflowHalt200ApplicationJsonString?: string;
}
