import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetInformTimeoutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inform_timeout" })
  informTimeout: number;
}


export class SetInformTimeoutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetInformTimeoutPathParams;
}


export class SetInformTimeoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setInformTimeout200ApplicationJsonInt32Integer?: number;
}
