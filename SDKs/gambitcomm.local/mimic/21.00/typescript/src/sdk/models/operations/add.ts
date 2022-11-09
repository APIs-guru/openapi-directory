import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class AddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddPathParams;
}


export class AddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  add200ApplicationJsonString?: string;
}
