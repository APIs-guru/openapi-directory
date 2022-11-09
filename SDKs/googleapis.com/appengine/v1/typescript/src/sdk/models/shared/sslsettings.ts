import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SslSettingsSslManagementTypeEnum {
    SslManagementTypeUnspecified = "SSL_MANAGEMENT_TYPE_UNSPECIFIED"
,    Automatic = "AUTOMATIC"
,    Manual = "MANUAL"
}


// SslSettings
/** 
 * SSL configuration for a DomainMapping resource.
**/
export class SslSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=pendingManagedCertificateId" })
  pendingManagedCertificateId?: string;

  @Metadata({ data: "json, name=sslManagementType" })
  sslManagementType?: SslSettingsSslManagementTypeEnum;
}
