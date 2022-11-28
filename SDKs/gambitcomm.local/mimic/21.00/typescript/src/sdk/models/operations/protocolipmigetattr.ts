import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolIpmiGetAttrPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;
}


export class ProtocolIpmiGetAttrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolIpmiGetAttrPathParams;
}


export class ProtocolIpmiGetAttrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolIpmiGetAttr200ApplicationJsonString?: string;
}
