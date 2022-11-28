import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateRawData } from "./certificaterawdata";
import { ManagedCertificate } from "./managedcertificate";



// AuthorizedCertificate
/** 
 * An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
**/
export class AuthorizedCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateRawData" })
  certificateRawData?: CertificateRawData;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=domainMappingsCount" })
  domainMappingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=domainNames" })
  domainNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=managedCertificate" })
  managedCertificate?: ManagedCertificate;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=visibleDomainMappings" })
  visibleDomainMappings?: string[];
}
