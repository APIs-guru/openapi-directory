import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSafetyRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
**/
export declare class UpdateSafetyRuleRequestBodyAssertionRuleUpdate extends SpeakeasyBase {
    name?: string;
    safetyRuleArn?: string;
    waitPeriodMs?: number;
}
/**
 * Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
**/
export declare class UpdateSafetyRuleRequestBodyGatingRuleUpdate extends SpeakeasyBase {
    name?: string;
    safetyRuleArn?: string;
    waitPeriodMs?: number;
}
export declare class UpdateSafetyRuleRequestBody extends SpeakeasyBase {
    assertionRuleUpdate?: UpdateSafetyRuleRequestBodyAssertionRuleUpdate;
    gatingRuleUpdate?: UpdateSafetyRuleRequestBodyGatingRuleUpdate;
}
export declare class UpdateSafetyRuleRequest extends SpeakeasyBase {
    headers: UpdateSafetyRuleHeaders;
    request: UpdateSafetyRuleRequestBody;
}
export declare class UpdateSafetyRuleResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateSafetyRuleResponse?: shared.UpdateSafetyRuleResponse;
    validationException?: any;
}
