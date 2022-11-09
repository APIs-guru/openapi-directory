import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SslSettingsSslManagementTypeEnum {
    SslManagementTypeUnspecified = "SSL_MANAGEMENT_TYPE_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}
/**
 * SSL configuration for a DomainMapping resource.
**/
export declare class SslSettings extends SpeakeasyBase {
    certificateId?: string;
    pendingManagedCertificateId?: string;
    sslManagementType?: SslSettingsSslManagementTypeEnum;
}
