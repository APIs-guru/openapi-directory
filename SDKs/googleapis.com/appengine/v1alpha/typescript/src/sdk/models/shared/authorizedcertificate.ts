import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateRawData } from "./certificaterawdata";
import { ManagedCertificate } from "./managedcertificate";


// AuthorizedCertificate
/** 
 * An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
**/
export class AuthorizedCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateRawData" })
  certificateRawData?: CertificateRawData;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=domainMappingsCount" })
  domainMappingsCount?: number;

  @Metadata({ data: "json, name=domainNames" })
  domainNames?: string[];

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=managedCertificate" })
  managedCertificate?: ManagedCertificate;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=visibleDomainMappings" })
  visibleDomainMappings?: string[];
}
