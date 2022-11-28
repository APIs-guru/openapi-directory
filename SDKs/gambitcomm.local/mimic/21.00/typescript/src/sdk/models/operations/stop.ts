import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class StopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPathParams;
}


export class StopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stop200ApplicationJsonString?: string;
}
