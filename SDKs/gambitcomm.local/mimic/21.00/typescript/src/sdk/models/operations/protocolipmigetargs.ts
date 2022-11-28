import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolIpmiGetArgsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolIpmiGetArgsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolIpmiGetArgsPathParams;
}


export class ProtocolIpmiGetArgsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolIpmiGetArgs200ApplicationJsonObject?: Map<string, any>;
}
