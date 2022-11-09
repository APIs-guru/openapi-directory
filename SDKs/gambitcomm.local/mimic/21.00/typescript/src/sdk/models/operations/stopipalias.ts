import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopIpaliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class StopIpaliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopIpaliasPathParams;
}


export class StopIpaliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopIpalias200ApplicationJsonString?: string;
}
