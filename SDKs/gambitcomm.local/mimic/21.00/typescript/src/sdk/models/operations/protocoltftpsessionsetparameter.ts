import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTftpSessionSetParameterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parameter" })
  parameter: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionID" })
  sessionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolTftpSessionSetParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTftpSessionSetParameterPathParams;
}


export class ProtocolTftpSessionSetParameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTftpSessionSetParameter200ApplicationJsonString?: string;
}
