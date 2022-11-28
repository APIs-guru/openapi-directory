import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateRawData } from "./certificaterawdata";
import { ManagedCertificate } from "./managedcertificate";
/**
 * An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
**/
export declare class AuthorizedCertificate extends SpeakeasyBase {
    certificateRawData?: CertificateRawData;
    displayName?: string;
    domainMappingsCount?: number;
    domainNames?: string[];
    expireTime?: string;
    id?: string;
    managedCertificate?: ManagedCertificate;
    name?: string;
    visibleDomainMappings?: string[];
}
