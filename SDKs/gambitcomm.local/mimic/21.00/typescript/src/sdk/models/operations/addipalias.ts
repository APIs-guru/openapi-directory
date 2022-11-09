import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddIpaliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=interface" })
  interface: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mask" })
  mask: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class AddIpaliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddIpaliasPathParams;
}


export class AddIpaliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addIpalias200ApplicationJsonString?: string;
}
