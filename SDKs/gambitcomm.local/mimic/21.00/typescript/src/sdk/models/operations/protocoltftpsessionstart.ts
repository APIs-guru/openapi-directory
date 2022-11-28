import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTftpSessionStartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionID" })
  sessionId: string;
}


export class ProtocolTftpSessionStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTftpSessionStartPathParams;
}


export class ProtocolTftpSessionStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTftpSessionStart200ApplicationJsonString?: string;
}
