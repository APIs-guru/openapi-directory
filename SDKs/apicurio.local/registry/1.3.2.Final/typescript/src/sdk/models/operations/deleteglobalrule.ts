import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteGlobalRuleRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}


export class DeleteGlobalRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: DeleteGlobalRuleRuleEnum;
}


export class DeleteGlobalRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGlobalRulePathParams;
}


export class DeleteGlobalRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
