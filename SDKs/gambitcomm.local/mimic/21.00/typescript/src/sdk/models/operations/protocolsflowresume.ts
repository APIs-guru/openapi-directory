import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSflowResumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowResumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSflowResumePathParams;
}


export class ProtocolSflowResumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSflowResume200ApplicationJsonString?: string;
}
