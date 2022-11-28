import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetGlobalRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}


export class GetGlobalRuleConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: GetGlobalRuleConfigRuleEnum;
}


export class GetGlobalRuleConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGlobalRuleConfigPathParams;
}


export class GetGlobalRuleConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  rule?: shared.Rule;

  @SpeakeasyMetadata()
  statusCode: number;
}
