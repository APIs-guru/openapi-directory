import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStarttimePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetStarttimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStarttimePathParams;
}


export class GetStarttimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getStarttime200ApplicationJsonString?: string;
}
