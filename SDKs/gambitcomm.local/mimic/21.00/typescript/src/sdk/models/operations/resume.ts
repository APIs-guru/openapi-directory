import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ResumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResumePathParams;
}


export class ResumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  resume200ApplicationJsonString?: string;
}
