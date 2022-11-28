import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStatePathParams;
}


export class GetStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getState200ApplicationJsonString?: string;
}
