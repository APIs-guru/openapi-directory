import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowSetFileNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;
}


export class ProtocolNetflowSetFileNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowSetFileNamePathParams;
}


export class ProtocolNetflowSetFileNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowSetFileName200ApplicationJsonString?: string;
}
