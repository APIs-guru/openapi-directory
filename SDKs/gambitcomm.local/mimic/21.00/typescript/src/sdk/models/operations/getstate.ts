import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetStateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStatePathParams;
}


export class GetStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getState200ApplicationJsonString?: string;
}
