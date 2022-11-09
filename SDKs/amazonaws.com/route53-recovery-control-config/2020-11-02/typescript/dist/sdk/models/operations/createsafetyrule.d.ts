import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateSafetyRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A new assertion rule for a control panel.
**/
export declare class CreateSafetyRuleRequestBodyAssertionRule extends SpeakeasyBase {
    assertedControls?: string[];
    controlPanelArn?: string;
    name?: string;
    ruleConfig?: shared.RuleConfig;
    waitPeriodMs?: number;
}
/**
 * A new gating rule for a control panel.
**/
export declare class CreateSafetyRuleRequestBodyGatingRule extends SpeakeasyBase {
    controlPanelArn?: string;
    gatingControls?: string[];
    name?: string;
    ruleConfig?: shared.RuleConfig;
    targetControls?: string[];
    waitPeriodMs?: number;
}
export declare class CreateSafetyRuleRequestBody extends SpeakeasyBase {
    assertionRule?: CreateSafetyRuleRequestBodyAssertionRule;
    clientToken?: string;
    gatingRule?: CreateSafetyRuleRequestBodyGatingRule;
}
export declare class CreateSafetyRuleRequest extends SpeakeasyBase {
    headers: CreateSafetyRuleHeaders;
    request: CreateSafetyRuleRequestBody;
}
export declare class CreateSafetyRuleResponse extends SpeakeasyBase {
    contentType: string;
    createSafetyRuleResponse?: shared.CreateSafetyRuleResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
