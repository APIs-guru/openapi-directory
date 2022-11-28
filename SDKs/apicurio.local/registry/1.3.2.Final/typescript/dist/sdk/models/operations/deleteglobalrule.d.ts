import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteGlobalRuleRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}
export declare class DeleteGlobalRulePathParams extends SpeakeasyBase {
    rule: DeleteGlobalRuleRuleEnum;
}
export declare class DeleteGlobalRuleRequest extends SpeakeasyBase {
    pathParams: DeleteGlobalRulePathParams;
}
export declare class DeleteGlobalRuleResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
