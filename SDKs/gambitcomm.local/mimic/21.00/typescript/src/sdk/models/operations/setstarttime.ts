import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetStarttimePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=start" })
  start: number;
}


export class SetStarttimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetStarttimePathParams;
}


export class SetStarttimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setStarttime200ApplicationJsonString?: string;
}
