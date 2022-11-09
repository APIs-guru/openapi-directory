import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPrivdirPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetPrivdirRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPrivdirPathParams;
}


export class GetPrivdirResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPrivdir200ApplicationJsonString?: string;
}
