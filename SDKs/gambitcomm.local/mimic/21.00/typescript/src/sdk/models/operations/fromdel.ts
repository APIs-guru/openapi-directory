import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FromDelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class FromDelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FromDelPathParams;
}


export class FromDelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  fromDel200ApplicationJsonString?: string;
}
