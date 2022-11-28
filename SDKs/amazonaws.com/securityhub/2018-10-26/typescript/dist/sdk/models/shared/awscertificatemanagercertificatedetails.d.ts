import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCertificateManagerCertificateDomainValidationOption } from "./awscertificatemanagercertificatedomainvalidationoption";
import { AwsCertificateManagerCertificateExtendedKeyUsage } from "./awscertificatemanagercertificateextendedkeyusage";
import { AwsCertificateManagerCertificateKeyUsage } from "./awscertificatemanagercertificatekeyusage";
import { AwsCertificateManagerCertificateOptions } from "./awscertificatemanagercertificateoptions";
import { AwsCertificateManagerCertificateRenewalSummary } from "./awscertificatemanagercertificaterenewalsummary";
/**
 * Provides details about an Certificate Manager certificate.
**/
export declare class AwsCertificateManagerCertificateDetails extends SpeakeasyBase {
    certificateAuthorityArn?: string;
    createdAt?: string;
    domainName?: string;
    domainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];
    extendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsage[];
    failureReason?: string;
    importedAt?: string;
    inUseBy?: string[];
    issuedAt?: string;
    issuer?: string;
    keyAlgorithm?: string;
    keyUsages?: AwsCertificateManagerCertificateKeyUsage[];
    notAfter?: string;
    notBefore?: string;
    options?: AwsCertificateManagerCertificateOptions;
    renewalEligibility?: string;
    renewalSummary?: AwsCertificateManagerCertificateRenewalSummary;
    serial?: string;
    signatureAlgorithm?: string;
    status?: string;
    subject?: string;
    subjectAlternativeNames?: string[];
    type?: string;
}
