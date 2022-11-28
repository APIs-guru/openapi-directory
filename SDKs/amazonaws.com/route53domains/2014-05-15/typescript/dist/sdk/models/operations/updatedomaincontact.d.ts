import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDomainContactXAmzTargetEnum {
    Route53DomainsV20140515UpdateDomainContact = "Route53Domains_v20140515.UpdateDomainContact"
}
export declare class UpdateDomainContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDomainContactXAmzTargetEnum;
}
export declare class UpdateDomainContactRequest extends SpeakeasyBase {
    headers: UpdateDomainContactHeaders;
    request: shared.UpdateDomainContactRequest;
}
export declare class UpdateDomainContactResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    tldRulesViolation?: any;
    unsupportedTld?: any;
    updateDomainContactResponse?: shared.UpdateDomainContactResponse;
}
