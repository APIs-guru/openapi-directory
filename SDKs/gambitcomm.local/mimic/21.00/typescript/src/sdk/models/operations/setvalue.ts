import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable" })
  variable: string;
}


export class SetValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetValuePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: string;
}


export class SetValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setValue200ApplicationJsonString?: string;
}
