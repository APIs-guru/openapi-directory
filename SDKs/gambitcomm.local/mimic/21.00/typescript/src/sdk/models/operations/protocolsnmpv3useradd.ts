import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3UserAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=authKey" })
  authKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=authProtocol" })
  authProtocol: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=privKey" })
  privKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=privProtocol" })
  privProtocol: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=securityName" })
  securityName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class ProtocolSnmpv3UserAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3UserAddPathParams;
}


export class ProtocolSnmpv3UserAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3UserAdd200ApplicationJsonString?: string;
}
