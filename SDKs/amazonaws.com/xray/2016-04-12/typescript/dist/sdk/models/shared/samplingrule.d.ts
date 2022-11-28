import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
**/
export declare class SamplingRule extends SpeakeasyBase {
    attributes?: Map<string, string>;
    fixedRate: number;
    httpMethod: string;
    host: string;
    priority: number;
    reservoirSize: number;
    resourceArn: string;
    ruleArn?: string;
    ruleName?: string;
    serviceName: string;
    serviceType: string;
    urlPath: string;
    version: number;
}
