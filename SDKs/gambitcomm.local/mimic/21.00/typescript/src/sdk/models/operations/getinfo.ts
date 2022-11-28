import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInfoPathParams;
}


export class GetInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInfo200ApplicationJsonString?: string;
}
