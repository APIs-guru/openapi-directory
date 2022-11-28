import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTelnetConnectionSignalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionID" })
  connectionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=signalName" })
  signalName: string;
}


export class ProtocolTelnetConnectionSignalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTelnetConnectionSignalPathParams;
}


export class ProtocolTelnetConnectionSignalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTelnetConnectionSignal200ApplicationJsonStrings?: string[];
}
