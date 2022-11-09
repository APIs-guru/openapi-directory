import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolTftpSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpSetTracePathParams;
}


export class ProtocolTftpSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpSetTrace200ApplicationJsonString?: string;
}
