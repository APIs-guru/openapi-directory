import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChangedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetChangedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChangedPathParams;
}


export class GetChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getChanged200ApplicationJsonInt32Integer?: number;
}
