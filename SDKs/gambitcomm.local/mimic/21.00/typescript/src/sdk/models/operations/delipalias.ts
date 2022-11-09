import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DelIpaliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class DelIpaliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DelIpaliasPathParams;
}


export class DelIpaliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  delIpalias200ApplicationJsonString?: string;
}
