import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetPortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPortPathParams;
}


export class GetPortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPort200ApplicationJsonString?: string;
}
