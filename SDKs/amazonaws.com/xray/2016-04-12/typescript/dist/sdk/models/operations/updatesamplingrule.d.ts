import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSamplingRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A document specifying changes to a sampling rule's configuration.
**/
export declare class UpdateSamplingRuleRequestBodySamplingRuleUpdate extends SpeakeasyBase {
    attributes?: Map<string, string>;
    fixedRate?: number;
    httpMethod?: string;
    host?: string;
    priority?: number;
    reservoirSize?: number;
    resourceArn?: string;
    ruleArn?: string;
    ruleName?: string;
    serviceName?: string;
    serviceType?: string;
    urlPath?: string;
}
export declare class UpdateSamplingRuleRequestBody extends SpeakeasyBase {
    samplingRuleUpdate: UpdateSamplingRuleRequestBodySamplingRuleUpdate;
}
export declare class UpdateSamplingRuleRequest extends SpeakeasyBase {
    headers: UpdateSamplingRuleHeaders;
    request: UpdateSamplingRuleRequestBody;
}
export declare class UpdateSamplingRuleResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
    updateSamplingRuleResult?: shared.UpdateSamplingRuleResult;
}
