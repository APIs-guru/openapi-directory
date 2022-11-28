import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMibPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetMibRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMibPathParams;
}


export class GetMibResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMib200ApplicationJsonString?: string;
}
