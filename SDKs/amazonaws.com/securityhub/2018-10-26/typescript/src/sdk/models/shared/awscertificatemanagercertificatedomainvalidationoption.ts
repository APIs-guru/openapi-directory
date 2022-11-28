import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCertificateManagerCertificateResourceRecord } from "./awscertificatemanagercertificateresourcerecord";



// AwsCertificateManagerCertificateDomainValidationOption
/** 
 * <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p> </li> </ul>
**/
export class AwsCertificateManagerCertificateDomainValidationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceRecord" })
  resourceRecord?: AwsCertificateManagerCertificateResourceRecord;

  @SpeakeasyMetadata({ data: "json, name=ValidationDomain" })
  validationDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationEmails" })
  validationEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=ValidationMethod" })
  validationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationStatus" })
  validationStatus?: string;
}
