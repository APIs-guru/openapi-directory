import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCertificateManagerCertificateDomainValidationOption } from "./awscertificatemanagercertificatedomainvalidationoption";



// AwsCertificateManagerCertificateRenewalSummary
/** 
 * Contains information about the Certificate Manager managed renewal for an <code>AMAZON_ISSUED</code> certificate.
**/
export class AwsCertificateManagerCertificateRenewalSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainValidationOptions", elemType: AwsCertificateManagerCertificateDomainValidationOption })
  domainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];

  @SpeakeasyMetadata({ data: "json, name=RenewalStatus" })
  renewalStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=RenewalStatusReason" })
  renewalStatusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: string;
}
