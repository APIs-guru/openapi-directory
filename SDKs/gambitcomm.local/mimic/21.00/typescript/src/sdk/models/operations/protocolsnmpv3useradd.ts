import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSnmpv3UserAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authKey" })
  authKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authProtocol" })
  authProtocol: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=privKey" })
  privKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=privProtocol" })
  privProtocol: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityName" })
  securityName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class ProtocolSnmpv3UserAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSnmpv3UserAddPathParams;
}


export class ProtocolSnmpv3UserAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSnmpv3UserAdd200ApplicationJsonString?: string;
}
