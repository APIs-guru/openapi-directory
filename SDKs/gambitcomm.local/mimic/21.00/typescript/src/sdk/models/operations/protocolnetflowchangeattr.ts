import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowChangeAttrPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=field-num" })
  fieldNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=flowset-uid" })
  flowsetUid: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolNetflowChangeAttrRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowChangeAttrPathParams;
}


export class ProtocolNetflowChangeAttrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowChangeAttr200ApplicationJsonString?: string;
}
