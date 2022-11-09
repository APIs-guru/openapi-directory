import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetStarttimePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=start" })
  start: number;
}


export class SetStarttimeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetStarttimePathParams;
}


export class SetStarttimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setStarttime200ApplicationJsonString?: string;
}
