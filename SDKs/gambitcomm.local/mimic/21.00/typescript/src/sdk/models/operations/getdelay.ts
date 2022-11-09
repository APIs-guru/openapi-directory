import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDelayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetDelayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDelayPathParams;
}


export class GetDelayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDelay200ApplicationJsonInt32Integer?: number;
}
