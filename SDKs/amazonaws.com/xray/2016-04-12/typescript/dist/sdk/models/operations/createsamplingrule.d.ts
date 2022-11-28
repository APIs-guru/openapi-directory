import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSamplingRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
**/
export declare class CreateSamplingRuleRequestBodySamplingRule extends SpeakeasyBase {
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
    version?: number;
}
export declare class CreateSamplingRuleRequestBody extends SpeakeasyBase {
    samplingRule: CreateSamplingRuleRequestBodySamplingRule;
    tags?: shared.Tag[];
}
export declare class CreateSamplingRuleRequest extends SpeakeasyBase {
    headers: CreateSamplingRuleHeaders;
    request: CreateSamplingRuleRequestBody;
}
export declare class CreateSamplingRuleResponse extends SpeakeasyBase {
    contentType: string;
    createSamplingRuleResult?: shared.CreateSamplingRuleResult;
    invalidRequestException?: any;
    ruleLimitExceededException?: any;
    statusCode: number;
    throttledException?: any;
}
