import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnsetValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable" })
  variable: string;
}


export class UnsetValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnsetValuePathParams;
}


export class UnsetValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsetValue200ApplicationJsonString?: string;
}
