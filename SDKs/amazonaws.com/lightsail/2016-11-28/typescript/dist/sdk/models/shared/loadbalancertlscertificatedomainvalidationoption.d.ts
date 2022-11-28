import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTlsCertificateDomainStatusEnum } from "./loadbalancertlscertificatedomainstatusenum";
/**
 * Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.
**/
export declare class LoadBalancerTlsCertificateDomainValidationOption extends SpeakeasyBase {
    domainName?: string;
    validationStatus?: LoadBalancerTlsCertificateDomainStatusEnum;
}
