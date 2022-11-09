import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetValidatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=validate" })
  validate: number;
}


export class SetValidateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetValidatePathParams;
}


export class SetValidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setValidate200ApplicationJsonInt32Integer?: number;
}
