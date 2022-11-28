import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTelnetServerGetUserdbPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetServerGetUserdbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTelnetServerGetUserdbPathParams;
}


export class ProtocolTelnetServerGetUserdbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTelnetServerGetUserdb200ApplicationJsonStrings?: string[];
}
