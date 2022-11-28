import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateGlobalRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}


export class UpdateGlobalRuleConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: UpdateGlobalRuleConfigRuleEnum;
}


export class UpdateGlobalRuleConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGlobalRuleConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Rule;
}


export class UpdateGlobalRuleConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  rule?: shared.Rule;

  @SpeakeasyMetadata()
  statusCode: number;
}
