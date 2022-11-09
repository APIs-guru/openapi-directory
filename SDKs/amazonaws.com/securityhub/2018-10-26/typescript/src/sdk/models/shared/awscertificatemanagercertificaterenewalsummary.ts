import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsCertificateManagerCertificateDomainValidationOption } from "./awscertificatemanagercertificatedomainvalidationoption";


// AwsCertificateManagerCertificateRenewalSummary
/** 
 * Contains information about the Certificate Manager managed renewal for an <code>AMAZON_ISSUED</code> certificate.
**/
export class AwsCertificateManagerCertificateRenewalSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainValidationOptions", elemType: shared.AwsCertificateManagerCertificateDomainValidationOption })
  domainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];

  @Metadata({ data: "json, name=RenewalStatus" })
  renewalStatus?: string;

  @Metadata({ data: "json, name=RenewalStatusReason" })
  renewalStatusReason?: string;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: string;
}
