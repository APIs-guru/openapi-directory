import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpSessionReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=srcfile" })
  srcfile: string;
}


export class ProtocolTftpSessionReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpSessionReadPathParams;
}


export class ProtocolTftpSessionReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpSessionRead200ApplicationJsonInt32Integers?: number[];
}
