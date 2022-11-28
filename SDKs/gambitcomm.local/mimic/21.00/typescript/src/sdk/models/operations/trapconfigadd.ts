import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrapConfigAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class TrapConfigAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrapConfigAddPathParams;
}


export class TrapConfigAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trapConfigAdd200ApplicationJsonString?: string;
}
