import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTodGettimePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=numRetries" })
  numRetries: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=portNum" })
  portNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptName" })
  scriptName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverAddr" })
  serverAddr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=timeSec" })
  timeSec: number;
}


export class ProtocolTodGettimeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTodGettimePathParams;
}


export class ProtocolTodGettimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTodGettime200ApplicationJsonStrings?: string[];
}
