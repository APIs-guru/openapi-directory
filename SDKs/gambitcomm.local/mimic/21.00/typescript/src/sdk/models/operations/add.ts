import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class AddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddPathParams;
}


export class AddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  add200ApplicationJsonString?: string;
}
