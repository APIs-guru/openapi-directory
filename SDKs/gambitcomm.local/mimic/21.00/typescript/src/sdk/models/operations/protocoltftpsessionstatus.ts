import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpSessionStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionID" })
  sessionId: string;
}


export class ProtocolTftpSessionStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpSessionStatusPathParams;
}


export class ProtocolTftpSessionStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpSessionStatus200ApplicationJsonString?: string;
}
