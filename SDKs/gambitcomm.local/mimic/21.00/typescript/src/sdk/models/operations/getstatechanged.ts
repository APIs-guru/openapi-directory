import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStateChangedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetStateChangedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStateChangedPathParams;
}


export class GetStateChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getStateChanged200ApplicationJsonInt32Integer?: number;
}
