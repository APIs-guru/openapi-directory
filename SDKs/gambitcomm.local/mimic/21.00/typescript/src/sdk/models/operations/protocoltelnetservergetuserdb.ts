import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetServerGetUserdbPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetServerGetUserdbRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetServerGetUserdbPathParams;
}


export class ProtocolTelnetServerGetUserdbResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetServerGetUserdb200ApplicationJsonStrings?: string[];
}
