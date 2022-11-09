import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStateChangedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetStateChangedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStateChangedPathParams;
}


export class GetStateChangedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStateChanged200ApplicationJsonInt32Integer?: number;
}
