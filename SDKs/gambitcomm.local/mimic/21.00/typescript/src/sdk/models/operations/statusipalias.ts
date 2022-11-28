import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StatusIpaliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class StatusIpaliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StatusIpaliasPathParams;
}


export class StatusIpaliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  statusIpalias200ApplicationJsonString?: string;
}
