import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetScenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetScenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScenPathParams;
}


export class GetScenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getScen200ApplicationJsonInt32Integer?: number;
}
