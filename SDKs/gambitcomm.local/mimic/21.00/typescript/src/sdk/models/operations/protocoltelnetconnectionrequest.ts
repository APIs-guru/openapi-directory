import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetConnectionRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=command" })
  command: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=connectionID" })
  connectionId: number;
}


export class ProtocolTelnetConnectionRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetConnectionRequestPathParams;
}


export class ProtocolTelnetConnectionRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetConnectionRequest200ApplicationJsonStrings?: string[];
}
