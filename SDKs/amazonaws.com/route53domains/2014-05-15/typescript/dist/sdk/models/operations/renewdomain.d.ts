import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RenewDomainXAmzTargetEnum {
    Route53DomainsV20140515RenewDomain = "Route53Domains_v20140515.RenewDomain"
}
export declare class RenewDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RenewDomainXAmzTargetEnum;
}
export declare class RenewDomainRequest extends SpeakeasyBase {
    headers: RenewDomainHeaders;
    request: shared.RenewDomainRequest;
}
export declare class RenewDomainResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    invalidInput?: any;
    operationLimitExceeded?: any;
    renewDomainResponse?: shared.RenewDomainResponse;
    statusCode: number;
    tldRulesViolation?: any;
    unsupportedTld?: any;
}
