import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSnmpv3ViewAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mask" })
  mask: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subtree" })
  subtree: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=viewName" })
  viewName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=viewType" })
  viewType: string;
}


export class ProtocolSnmpv3ViewAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSnmpv3ViewAddPathParams;
}


export class ProtocolSnmpv3ViewAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSnmpv3ViewAdd200ApplicationJsonString?: string;
}
