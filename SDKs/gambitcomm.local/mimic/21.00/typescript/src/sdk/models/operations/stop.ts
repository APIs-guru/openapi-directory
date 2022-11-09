import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class StopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPathParams;
}


export class StopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stop200ApplicationJsonString?: string;
}
