import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartIpaliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class StartIpaliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartIpaliasPathParams;
}


export class StartIpaliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  startIpalias200ApplicationJsonString?: string;
}
