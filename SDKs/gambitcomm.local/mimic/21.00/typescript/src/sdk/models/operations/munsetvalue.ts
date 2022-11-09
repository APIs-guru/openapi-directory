import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MunsetValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class MunsetValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MunsetValuePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: string[][];
}


export class MunsetValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  munsetValue200ApplicationJsonString?: string;
}
