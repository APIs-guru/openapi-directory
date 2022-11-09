import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3GetEngineidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3GetEngineidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3GetEngineidPathParams;
}


export class ProtocolSnmpv3GetEngineidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3GetEngineid200ApplicationJsonString?: string;
}
