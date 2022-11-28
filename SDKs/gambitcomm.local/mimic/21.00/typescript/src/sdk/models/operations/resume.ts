import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResumePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ResumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResumePathParams;
}


export class ResumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  resume200ApplicationJsonString?: string;
}
