import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableDomainAutoRenewXAmzTargetEnum {
    Route53DomainsV20140515EnableDomainAutoRenew = "Route53Domains_v20140515.EnableDomainAutoRenew"
}
export declare class EnableDomainAutoRenewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableDomainAutoRenewXAmzTargetEnum;
}
export declare class EnableDomainAutoRenewRequest extends SpeakeasyBase {
    headers: EnableDomainAutoRenewHeaders;
    request: shared.EnableDomainAutoRenewRequest;
}
export declare class EnableDomainAutoRenewResponse extends SpeakeasyBase {
    contentType: string;
    enableDomainAutoRenewResponse?: Map<string, any>;
    invalidInput?: any;
    statusCode: number;
    tldRulesViolation?: any;
    unsupportedTld?: any;
}
