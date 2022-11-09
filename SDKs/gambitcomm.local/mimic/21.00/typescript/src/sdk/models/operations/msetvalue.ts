import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MsetValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class MsetValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MsetValuePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: string[][];
}


export class MsetValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  msetValue200ApplicationJsonString?: string;
}
