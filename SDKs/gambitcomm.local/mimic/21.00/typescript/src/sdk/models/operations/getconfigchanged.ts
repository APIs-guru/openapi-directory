import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConfigChangedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetConfigChangedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConfigChangedPathParams;
}


export class GetConfigChangedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getConfigChanged200ApplicationJsonInt32Integer?: number;
}
