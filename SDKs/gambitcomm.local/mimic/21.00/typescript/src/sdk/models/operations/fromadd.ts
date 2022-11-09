import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FromAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class FromAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FromAddPathParams;
}


export class FromAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  fromAdd200ApplicationJsonString?: string;
}
