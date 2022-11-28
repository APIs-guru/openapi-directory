import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetMaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMaskPathParams;
}


export class GetMaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMask200ApplicationJsonString?: string;
}
