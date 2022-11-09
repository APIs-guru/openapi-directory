import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3GroupAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupName" })
  groupName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=securityModel" })
  securityModel: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=securityName" })
  securityName: string;
}


export class ProtocolSnmpv3GroupAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3GroupAddPathParams;
}


export class ProtocolSnmpv3GroupAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3GroupAdd200ApplicationJsonString?: string;
}
