import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpSessionGetParameterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=parameter" })
  parameter: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionID" })
  sessionId: string;
}


export class ProtocolTftpSessionGetParameterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpSessionGetParameterPathParams;
}


export class ProtocolTftpSessionGetParameterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpSessionGetParameter200ApplicationJsonString?: string;
}
