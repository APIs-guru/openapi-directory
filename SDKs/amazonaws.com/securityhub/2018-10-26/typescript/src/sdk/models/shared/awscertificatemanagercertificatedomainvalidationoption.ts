import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsCertificateManagerCertificateResourceRecord } from "./awscertificatemanagercertificateresourcerecord";


// AwsCertificateManagerCertificateDomainValidationOption
/** 
 * <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p> </li> </ul>
**/
export class AwsCertificateManagerCertificateDomainValidationOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=ResourceRecord" })
  resourceRecord?: AwsCertificateManagerCertificateResourceRecord;

  @Metadata({ data: "json, name=ValidationDomain" })
  validationDomain?: string;

  @Metadata({ data: "json, name=ValidationEmails" })
  validationEmails?: string[];

  @Metadata({ data: "json, name=ValidationMethod" })
  validationMethod?: string;

  @Metadata({ data: "json, name=ValidationStatus" })
  validationStatus?: string;
}
