import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainValidationOptions", elemType: AwsCertificateManagerCertificateDomainValidationOption })
  domainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];

  @SpeakeasyMetadata({ data: "json, name=ExtendedKeyUsages", elemType: AwsCertificateManagerCertificateExtendedKeyUsage })
  extendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsage[];

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=ImportedAt" })
  importedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=InUseBy" })
  inUseBy?: string[];

  @SpeakeasyMetadata({ data: "json, name=IssuedAt" })
  issuedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyAlgorithm" })
  keyAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyUsages", elemType: AwsCertificateManagerCertificateKeyUsage })
  keyUsages?: AwsCertificateManagerCertificateKeyUsage[];

  @SpeakeasyMetadata({ data: "json, name=NotAfter" })
  notAfter?: string;

  @SpeakeasyMetadata({ data: "json, name=NotBefore" })
  notBefore?: string;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: AwsCertificateManagerCertificateOptions;

  @SpeakeasyMetadata({ data: "json, name=RenewalEligibility" })
  renewalEligibility?: string;

  @SpeakeasyMetadata({ data: "json, name=RenewalSummary" })
  renewalSummary?: AwsCertificateManagerCertificateRenewalSummary;

  @SpeakeasyMetadata({ data: "json, name=Serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=SignatureAlgorithm" })
  signatureAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=SubjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
