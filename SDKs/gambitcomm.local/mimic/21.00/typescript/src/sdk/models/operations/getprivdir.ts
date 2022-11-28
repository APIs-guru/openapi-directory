import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPrivdirPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetPrivdirRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPrivdirPathParams;
}


export class GetPrivdirResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPrivdir200ApplicationJsonString?: string;
}
