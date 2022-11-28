import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCertificateManagerCertificateDomainValidationOption } from "./awscertificatemanagercertificatedomainvalidationoption";
/**
 * Contains information about the Certificate Manager managed renewal for an <code>AMAZON_ISSUED</code> certificate.
**/
export declare class AwsCertificateManagerCertificateRenewalSummary extends SpeakeasyBase {
    domainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];
    renewalStatus?: string;
    renewalStatusReason?: string;
    updatedAt?: string;
}
