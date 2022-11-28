import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DelIpaliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class DelIpaliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelIpaliasPathParams;
}


export class DelIpaliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  delIpalias200ApplicationJsonString?: string;
}
