import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTodGettimePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numRetries" })
  numRetries: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portNum" })
  portNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptName" })
  scriptName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverAddr" })
  serverAddr: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timeSec" })
  timeSec: number;
}


export class ProtocolTodGettimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTodGettimePathParams;
}


export class ProtocolTodGettimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTodGettime200ApplicationJsonStrings?: string[];
}
