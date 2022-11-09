import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowListPathParams;
}


export class ProtocolNetflowListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowList200ApplicationJsonObjects?: Map<string, any>[];
}
