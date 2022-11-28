import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTelnetConnectionRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionID" })
  connectionId: number;
}


export class ProtocolTelnetConnectionRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTelnetConnectionRequestPathParams;
}


export class ProtocolTelnetConnectionRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTelnetConnectionRequest200ApplicationJsonStrings?: string[];
}
