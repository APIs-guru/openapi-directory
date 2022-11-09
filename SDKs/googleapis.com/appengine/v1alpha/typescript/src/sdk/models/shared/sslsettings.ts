import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SslSettings
/** 
 * SSL configuration for a DomainMapping resource.
**/
export class SslSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=isManagedCertificate" })
  isManagedCertificate?: boolean;
}
