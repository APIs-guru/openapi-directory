import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrapConfigDelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class TrapConfigDelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrapConfigDelPathParams;
}


export class TrapConfigDelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trapConfigDel200ApplicationJsonString?: string;
}
