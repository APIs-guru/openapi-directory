import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChangedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetChangedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChangedPathParams;
}


export class GetChangedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getChanged200ApplicationJsonInt32Integer?: number;
}
