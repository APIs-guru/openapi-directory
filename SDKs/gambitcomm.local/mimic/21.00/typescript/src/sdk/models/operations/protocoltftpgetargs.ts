import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTftpGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpGetArgsPathParams;
}


export class ProtocolTftpGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpGetArgs200ApplicationJsonObject?: Map<string, any>;
}
