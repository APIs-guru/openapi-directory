import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableDomainAutoRenewXAmzTargetEnum {
    Route53DomainsV20140515DisableDomainAutoRenew = "Route53Domains_v20140515.DisableDomainAutoRenew"
}
export declare class DisableDomainAutoRenewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableDomainAutoRenewXAmzTargetEnum;
}
export declare class DisableDomainAutoRenewRequest extends SpeakeasyBase {
    headers: DisableDomainAutoRenewHeaders;
    request: shared.DisableDomainAutoRenewRequest;
}
export declare class DisableDomainAutoRenewResponse extends SpeakeasyBase {
    contentType: string;
    disableDomainAutoRenewResponse?: Map<string, any>;
    invalidInput?: any;
    statusCode: number;
    unsupportedTld?: any;
}
