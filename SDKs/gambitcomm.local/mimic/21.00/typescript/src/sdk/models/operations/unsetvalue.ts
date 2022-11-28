import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnsetValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable" })
  variable: string;
}


export class UnsetValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnsetValuePathParams;
}


export class UnsetValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsetValue200ApplicationJsonString?: string;
}
