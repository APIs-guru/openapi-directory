import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStarttimePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetStarttimeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStarttimePathParams;
}


export class GetStarttimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStarttime200ApplicationJsonString?: string;
}
