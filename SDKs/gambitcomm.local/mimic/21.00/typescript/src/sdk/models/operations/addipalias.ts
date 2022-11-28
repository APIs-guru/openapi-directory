import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddIpaliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interface" })
  interface: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mask" })
  mask: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class AddIpaliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddIpaliasPathParams;
}


export class AddIpaliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addIpalias200ApplicationJsonString?: string;
}
