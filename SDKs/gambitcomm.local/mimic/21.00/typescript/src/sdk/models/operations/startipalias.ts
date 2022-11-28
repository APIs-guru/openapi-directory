import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartIpaliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class StartIpaliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartIpaliasPathParams;
}


export class StartIpaliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  startIpalias200ApplicationJsonString?: string;
}
