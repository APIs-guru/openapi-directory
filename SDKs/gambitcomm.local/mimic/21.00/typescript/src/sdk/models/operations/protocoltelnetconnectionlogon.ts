import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTelnetConnectionLogonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionID" })
  connectionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class ProtocolTelnetConnectionLogonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTelnetConnectionLogonPathParams;
}


export class ProtocolTelnetConnectionLogonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTelnetConnectionLogon200ApplicationJsonStrings?: string[];
}
