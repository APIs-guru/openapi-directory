import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetConnectionLogonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=connectionID" })
  connectionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=password" })
  password: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class ProtocolTelnetConnectionLogonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetConnectionLogonPathParams;
}


export class ProtocolTelnetConnectionLogonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetConnectionLogon200ApplicationJsonStrings?: string[];
}
