import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHostPathParams;
}


export class GetHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getHost200ApplicationJsonString?: string;
}
