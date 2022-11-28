import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSflowResumePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowResumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSflowResumePathParams;
}


export class ProtocolSflowResumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSflowResume200ApplicationJsonString?: string;
}
