import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StatusIpaliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class StatusIpaliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StatusIpaliasPathParams;
}


export class StatusIpaliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  statusIpalias200ApplicationJsonString?: string;
}
