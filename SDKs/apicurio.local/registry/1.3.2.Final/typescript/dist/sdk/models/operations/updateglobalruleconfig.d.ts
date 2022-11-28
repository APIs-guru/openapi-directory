import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateGlobalRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}
export declare class UpdateGlobalRuleConfigPathParams extends SpeakeasyBase {
    rule: UpdateGlobalRuleConfigRuleEnum;
}
export declare class UpdateGlobalRuleConfigRequest extends SpeakeasyBase {
    pathParams: UpdateGlobalRuleConfigPathParams;
    request: shared.Rule;
}
export declare class UpdateGlobalRuleConfigResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    rule?: shared.Rule;
    statusCode: number;
}
