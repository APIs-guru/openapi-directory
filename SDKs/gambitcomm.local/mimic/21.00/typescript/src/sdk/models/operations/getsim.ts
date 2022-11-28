import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSimPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetSimRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSimPathParams;
}


export class GetSimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSim200ApplicationJsonString?: string;
}
