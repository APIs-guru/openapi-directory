import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetGlobalRuleConfigRuleEnum {
    Validity = "VALIDITY"
,    Compatibility = "COMPATIBILITY"
}


export class GetGlobalRuleConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: GetGlobalRuleConfigRuleEnum;
}


export class GetGlobalRuleConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGlobalRuleConfigPathParams;
}


export class GetGlobalRuleConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  rule?: shared.Rule;

  @Metadata()
  statusCode: number;
}
