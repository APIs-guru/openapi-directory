import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpSessionStopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionID" })
  sessionId: string;
}


export class ProtocolTftpSessionStopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpSessionStopPathParams;
}


export class ProtocolTftpSessionStopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpSessionStop200ApplicationJsonString?: string;
}
