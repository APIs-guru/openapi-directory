import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetStatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=state" })
  state: number;
}


export class SetStateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetStatePathParams;
}


export class SetStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setState200ApplicationJsonString?: string;
}
