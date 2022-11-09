import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3ViewDelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=viewName" })
  viewName: string;
}


export class ProtocolSnmpv3ViewDelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3ViewDelPathParams;
}


export class ProtocolSnmpv3ViewDelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3ViewDel200ApplicationJsonString?: string;
}
