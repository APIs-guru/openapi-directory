import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable" })
  variable: string;
}


export class GetValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetValuePathParams;
}


export class GetValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getValue200ApplicationJsonString?: string;
}
