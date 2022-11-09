import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteGlobalRuleRuleEnum {
    Validity = "VALIDITY"
,    Compatibility = "COMPATIBILITY"
}


export class DeleteGlobalRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: DeleteGlobalRuleRuleEnum;
}


export class DeleteGlobalRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGlobalRulePathParams;
}


export class DeleteGlobalRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
