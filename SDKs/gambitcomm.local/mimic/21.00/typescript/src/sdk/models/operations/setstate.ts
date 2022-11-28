import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=state" })
  state: number;
}


export class SetStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetStatePathParams;
}


export class SetStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setState200ApplicationJsonString?: string;
}
