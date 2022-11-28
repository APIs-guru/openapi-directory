import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SslSettings
/** 
 * SSL configuration for a DomainMapping resource.
**/
export class SslSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=isManagedCertificate" })
  isManagedCertificate?: boolean;
}
