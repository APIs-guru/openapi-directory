import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ReloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReloadPathParams;
}


export class ReloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reload200ApplicationJsonString?: string;
}
