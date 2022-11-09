import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3ViewAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mask" })
  mask: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subtree" })
  subtree: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=viewName" })
  viewName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=viewType" })
  viewType: string;
}


export class ProtocolSnmpv3ViewAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3ViewAddPathParams;
}


export class ProtocolSnmpv3ViewAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3ViewAdd200ApplicationJsonString?: string;
}
