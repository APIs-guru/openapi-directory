import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable" })
  variable: string;
}


export class GetValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetValuePathParams;
}


export class GetValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getValue200ApplicationJsonString?: string;
}
