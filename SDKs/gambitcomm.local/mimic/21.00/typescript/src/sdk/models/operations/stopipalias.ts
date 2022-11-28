import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopIpaliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class StopIpaliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopIpaliasPathParams;
}


export class StopIpaliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopIpalias200ApplicationJsonString?: string;
}
