import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolNetflowChangeAttrPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=field-num" })
  fieldNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flowset-uid" })
  flowsetUid: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolNetflowChangeAttrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolNetflowChangeAttrPathParams;
}


export class ProtocolNetflowChangeAttrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolNetflowChangeAttr200ApplicationJsonString?: string;
}
