import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterDomainXAmzTargetEnum {
    Route53DomainsV20140515RegisterDomain = "Route53Domains_v20140515.RegisterDomain"
}
export declare class RegisterDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterDomainXAmzTargetEnum;
}
export declare class RegisterDomainRequest extends SpeakeasyBase {
    headers: RegisterDomainHeaders;
    request: shared.RegisterDomainRequest;
}
export declare class RegisterDomainResponse extends SpeakeasyBase {
    contentType: string;
    domainLimitExceeded?: any;
    duplicateRequest?: any;
    invalidInput?: any;
    operationLimitExceeded?: any;
    registerDomainResponse?: shared.RegisterDomainResponse;
    statusCode: number;
    tldRulesViolation?: any;
    unsupportedTld?: any;
}
