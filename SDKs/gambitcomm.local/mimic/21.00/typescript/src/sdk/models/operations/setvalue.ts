import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable" })
  variable: string;
}


export class SetValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetValuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string;
}


export class SetValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setValue200ApplicationJsonString?: string;
}
