import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetPrivdirPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=privdir" })
  privdir: string;
}


export class SetPrivdirRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetPrivdirPathParams;
}


export class SetPrivdirResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setPrivdir200ApplicationJsonString?: string;
}
