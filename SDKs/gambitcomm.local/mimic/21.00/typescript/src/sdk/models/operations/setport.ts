import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetPortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class SetPortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetPortPathParams;
}


export class SetPortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setPort200ApplicationJsonString?: string;
}
