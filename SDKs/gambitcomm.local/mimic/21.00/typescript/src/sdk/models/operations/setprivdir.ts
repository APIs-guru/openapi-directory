import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetPrivdirPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=privdir" })
  privdir: string;
}


export class SetPrivdirRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetPrivdirPathParams;
}


export class SetPrivdirResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setPrivdir200ApplicationJsonString?: string;
}
