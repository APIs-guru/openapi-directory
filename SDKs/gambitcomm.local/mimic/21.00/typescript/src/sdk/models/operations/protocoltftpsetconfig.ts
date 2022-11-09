import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolTftpSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpSetConfigPathParams;
}


export class ProtocolTftpSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpSetConfig200ApplicationJsonString?: string;
}
