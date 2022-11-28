import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SavePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class SaveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SavePathParams;
}


export class SaveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  save200ApplicationJsonString?: string;
}
