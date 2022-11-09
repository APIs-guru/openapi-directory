import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3GroupListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3GroupListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3GroupListPathParams;
}


export class ProtocolSnmpv3GroupListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3GroupList200ApplicationJsonStrings?: string[];
}
