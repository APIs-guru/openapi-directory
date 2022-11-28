import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDelayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetDelayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDelayPathParams;
}


export class GetDelayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDelay200ApplicationJsonInt32Integer?: number;
}
