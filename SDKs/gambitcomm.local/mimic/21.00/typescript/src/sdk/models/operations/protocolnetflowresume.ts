import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowResumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowResumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowResumePathParams;
}


export class ProtocolNetflowResumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowResume200ApplicationJsonString?: string;
}
