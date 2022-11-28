import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetValidatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetValidatePathParams;
}


export class GetValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getValidate200ApplicationJsonInt32Integer?: number;
}
