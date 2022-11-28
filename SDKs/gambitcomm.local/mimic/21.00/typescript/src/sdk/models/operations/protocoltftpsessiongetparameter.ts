import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTftpSessionGetParameterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parameter" })
  parameter: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionID" })
  sessionId: string;
}


export class ProtocolTftpSessionGetParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTftpSessionGetParameterPathParams;
}


export class ProtocolTftpSessionGetParameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTftpSessionGetParameter200ApplicationJsonString?: string;
}
