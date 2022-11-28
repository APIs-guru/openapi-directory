import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTftpSessionWritePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=srcfile" })
  srcfile: string;
}


export class ProtocolTftpSessionWriteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTftpSessionWritePathParams;
}


export class ProtocolTftpSessionWriteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTftpSessionWrite200ApplicationJsonInt32Integers?: number[];
}
