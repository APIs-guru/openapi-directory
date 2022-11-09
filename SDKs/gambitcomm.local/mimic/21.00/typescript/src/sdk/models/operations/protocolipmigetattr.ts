import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolIpmiGetAttrPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;
}


export class ProtocolIpmiGetAttrRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolIpmiGetAttrPathParams;
}


export class ProtocolIpmiGetAttrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolIpmiGetAttr200ApplicationJsonString?: string;
}
