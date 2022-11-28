import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetValidatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=validate" })
  validate: number;
}


export class SetValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetValidatePathParams;
}


export class SetValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setValidate200ApplicationJsonInt32Integer?: number;
}
