import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class StartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartPathParams;
}


export class StartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  start200ApplicationJsonString?: string;
}
