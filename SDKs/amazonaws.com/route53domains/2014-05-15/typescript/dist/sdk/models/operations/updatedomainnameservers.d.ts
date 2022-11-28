import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDomainNameserversXAmzTargetEnum {
    Route53DomainsV20140515UpdateDomainNameservers = "Route53Domains_v20140515.UpdateDomainNameservers"
}
export declare class UpdateDomainNameserversHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDomainNameserversXAmzTargetEnum;
}
export declare class UpdateDomainNameserversRequest extends SpeakeasyBase {
    headers: UpdateDomainNameserversHeaders;
    request: shared.UpdateDomainNameserversRequest;
}
export declare class UpdateDomainNameserversResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    tldRulesViolation?: any;
    unsupportedTld?: any;
    updateDomainNameserversResponse?: shared.UpdateDomainNameserversResponse;
}
