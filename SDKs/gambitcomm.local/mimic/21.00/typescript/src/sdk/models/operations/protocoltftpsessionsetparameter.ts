import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpSessionSetParameterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=parameter" })
  parameter: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionID" })
  sessionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolTftpSessionSetParameterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpSessionSetParameterPathParams;
}


export class ProtocolTftpSessionSetParameterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpSessionSetParameter200ApplicationJsonString?: string;
}
