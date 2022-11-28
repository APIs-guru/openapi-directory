import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolIpmiSetTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolIpmiSetTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolIpmiSetTracePathParams;
}


export class ProtocolIpmiSetTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolIpmiSetTrace200ApplicationJsonString?: string;
}
