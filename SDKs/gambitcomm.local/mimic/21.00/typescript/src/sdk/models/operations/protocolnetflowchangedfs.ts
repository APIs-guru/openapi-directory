import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolNetflowChangeDfsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;
}


export class ProtocolNetflowChangeDfsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolNetflowChangeDfsPathParams;
}


export class ProtocolNetflowChangeDfsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolNetflowChangeDfs200ApplicationJsonString?: string;
}
