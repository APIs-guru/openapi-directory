import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpSessionWritePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=srcfile" })
  srcfile: string;
}


export class ProtocolTftpSessionWriteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpSessionWritePathParams;
}


export class ProtocolTftpSessionWriteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpSessionWrite200ApplicationJsonInt32Integers?: number[];
}
