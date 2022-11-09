import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3SetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=parameter" })
  parameter: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolSnmpv3SetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3SetConfigPathParams;
}


export class ProtocolSnmpv3SetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3SetConfig200ApplicationJsonString?: string;
}
