import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDomainContactPrivacyXAmzTargetEnum {
    Route53DomainsV20140515UpdateDomainContactPrivacy = "Route53Domains_v20140515.UpdateDomainContactPrivacy"
}
export declare class UpdateDomainContactPrivacyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDomainContactPrivacyXAmzTargetEnum;
}
export declare class UpdateDomainContactPrivacyRequest extends SpeakeasyBase {
    headers: UpdateDomainContactPrivacyHeaders;
    request: shared.UpdateDomainContactPrivacyRequest;
}
export declare class UpdateDomainContactPrivacyResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    tldRulesViolation?: any;
    unsupportedTld?: any;
    updateDomainContactPrivacyResponse?: shared.UpdateDomainContactPrivacyResponse;
}
