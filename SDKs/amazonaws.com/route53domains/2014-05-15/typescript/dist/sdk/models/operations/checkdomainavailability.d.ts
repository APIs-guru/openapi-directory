import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CheckDomainAvailabilityXAmzTargetEnum {
    Route53DomainsV20140515CheckDomainAvailability = "Route53Domains_v20140515.CheckDomainAvailability"
}
export declare class CheckDomainAvailabilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckDomainAvailabilityXAmzTargetEnum;
}
export declare class CheckDomainAvailabilityRequest extends SpeakeasyBase {
    headers: CheckDomainAvailabilityHeaders;
    request: shared.CheckDomainAvailabilityRequest;
}
export declare class CheckDomainAvailabilityResponse extends SpeakeasyBase {
    checkDomainAvailabilityResponse?: shared.CheckDomainAvailabilityResponse;
    contentType: string;
    invalidInput?: any;
    statusCode: number;
    unsupportedTld?: any;
}
