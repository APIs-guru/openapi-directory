import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetScenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetScenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScenPathParams;
}


export class GetScenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getScen200ApplicationJsonInt32Integer?: number;
}
