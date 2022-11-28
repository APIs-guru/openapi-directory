import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCertificateManagerCertificateResourceRecord } from "./awscertificatemanagercertificateresourcerecord";
/**
 * <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p> </li> </ul>
**/
export declare class AwsCertificateManagerCertificateDomainValidationOption extends SpeakeasyBase {
    domainName?: string;
    resourceRecord?: AwsCertificateManagerCertificateResourceRecord;
    validationDomain?: string;
    validationEmails?: string[];
    validationMethod?: string;
    validationStatus?: string;
}
