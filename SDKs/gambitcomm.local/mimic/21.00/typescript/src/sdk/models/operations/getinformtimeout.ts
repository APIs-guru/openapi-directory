import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInformTimeoutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetInformTimeoutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInformTimeoutPathParams;
}


export class GetInformTimeoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInformTimeout200ApplicationJsonInt32Integer?: number;
}
