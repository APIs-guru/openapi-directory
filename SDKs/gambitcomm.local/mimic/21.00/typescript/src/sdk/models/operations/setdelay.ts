import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetDelayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class SetDelayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetDelayPathParams;
}


export class SetDelayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setDelay200ApplicationJsonInt32Integer?: number;
}
