import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsCertificateManagerCertificateDomainValidationOption } from "./awscertificatemanagercertificatedomainvalidationoption";
import { AwsCertificateManagerCertificateExtendedKeyUsage } from "./awscertificatemanagercertificateextendedkeyusage";
import { AwsCertificateManagerCertificateKeyUsage } from "./awscertificatemanagercertificatekeyusage";
import { AwsCertificateManagerCertificateOptions } from "./awscertificatemanagercertificateoptions";
import { AwsCertificateManagerCertificateRenewalSummary } from "./awscertificatemanagercertificaterenewalsummary";


// AwsCertificateManagerCertificateDetails
/** 
 * Provides details about an Certificate Manager certificate.
**/
export class AwsCertificateManagerCertificateDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=DomainValidationOptions", elemType: shared.AwsCertificateManagerCertificateDomainValidationOption })
  domainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];

  @Metadata({ data: "json, name=ExtendedKeyUsages", elemType: shared.AwsCertificateManagerCertificateExtendedKeyUsage })
  extendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsage[];

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=ImportedAt" })
  importedAt?: string;

  @Metadata({ data: "json, name=InUseBy" })
  inUseBy?: string[];

  @Metadata({ data: "json, name=IssuedAt" })
  issuedAt?: string;

  @Metadata({ data: "json, name=Issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=KeyAlgorithm" })
  keyAlgorithm?: string;

  @Metadata({ data: "json, name=KeyUsages", elemType: shared.AwsCertificateManagerCertificateKeyUsage })
  keyUsages?: AwsCertificateManagerCertificateKeyUsage[];

  @Metadata({ data: "json, name=NotAfter" })
  notAfter?: string;

  @Metadata({ data: "json, name=NotBefore" })
  notBefore?: string;

  @Metadata({ data: "json, name=Options" })
  options?: AwsCertificateManagerCertificateOptions;

  @Metadata({ data: "json, name=RenewalEligibility" })
  renewalEligibility?: string;

  @Metadata({ data: "json, name=RenewalSummary" })
  renewalSummary?: AwsCertificateManagerCertificateRenewalSummary;

  @Metadata({ data: "json, name=Serial" })
  serial?: string;

  @Metadata({ data: "json, name=SignatureAlgorithm" })
  signatureAlgorithm?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=Subject" })
  subject?: string;

  @Metadata({ data: "json, name=SubjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
