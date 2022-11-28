import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SslSettingsSslManagementTypeEnum {
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}


// SslSettings
/** 
 * SSL configuration for a DomainMapping resource.
**/
export class SslSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingManagedCertificateId" })
  pendingManagedCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=sslManagementType" })
  sslManagementType?: SslSettingsSslManagementTypeEnum;
}
