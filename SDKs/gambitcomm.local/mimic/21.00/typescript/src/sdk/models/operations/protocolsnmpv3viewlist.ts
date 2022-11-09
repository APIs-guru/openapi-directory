import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3ViewListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3ViewListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3ViewListPathParams;
}


export class ProtocolSnmpv3ViewListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3ViewList200ApplicationJsonStrings?: string[];
}
