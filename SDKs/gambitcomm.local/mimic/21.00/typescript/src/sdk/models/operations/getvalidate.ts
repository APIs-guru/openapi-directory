import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetValidatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetValidateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetValidatePathParams;
}


export class GetValidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getValidate200ApplicationJsonInt32Integer?: number;
}
