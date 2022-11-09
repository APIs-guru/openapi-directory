import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolIpmiSetAttrPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolIpmiSetAttrRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolIpmiSetAttrPathParams;
}


export class ProtocolIpmiSetAttrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolIpmiSetAttr200ApplicationJsonString?: string;
}
