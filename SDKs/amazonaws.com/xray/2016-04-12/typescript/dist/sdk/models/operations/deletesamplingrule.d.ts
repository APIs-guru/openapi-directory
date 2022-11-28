import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSamplingRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSamplingRuleRequestBody extends SpeakeasyBase {
    ruleArn?: string;
    ruleName?: string;
}
export declare class DeleteSamplingRuleRequest extends SpeakeasyBase {
    headers: DeleteSamplingRuleHeaders;
    request: DeleteSamplingRuleRequestBody;
}
export declare class DeleteSamplingRuleResponse extends SpeakeasyBase {
    contentType: string;
    deleteSamplingRuleResult?: shared.DeleteSamplingRuleResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
