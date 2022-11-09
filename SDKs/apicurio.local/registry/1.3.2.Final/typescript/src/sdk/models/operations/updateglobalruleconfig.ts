import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateGlobalRuleConfigRuleEnum {
    Validity = "VALIDITY"
,    Compatibility = "COMPATIBILITY"
}


export class UpdateGlobalRuleConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: UpdateGlobalRuleConfigRuleEnum;
}


export class UpdateGlobalRuleConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGlobalRuleConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Rule;
}


export class UpdateGlobalRuleConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  rule?: shared.Rule;

  @Metadata()
  statusCode: number;
}
