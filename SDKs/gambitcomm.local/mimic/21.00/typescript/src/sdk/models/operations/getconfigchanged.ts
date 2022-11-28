import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConfigChangedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetConfigChangedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConfigChangedPathParams;
}


export class GetConfigChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getConfigChanged200ApplicationJsonInt32Integer?: number;
}
