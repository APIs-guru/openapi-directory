import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseConfigurationStatusEnum } from "./licenseconfigurationstatusenum";
import { ProductInformation } from "./productinformation";
export declare class UpdateLicenseConfigurationRequest extends SpeakeasyBase {
    description?: string;
    disassociateWhenNotFound?: boolean;
    licenseConfigurationArn: string;
    licenseConfigurationStatus?: LicenseConfigurationStatusEnum;
    licenseCount?: number;
    licenseCountHardLimit?: boolean;
    licenseRules?: string[];
    name?: string;
    productInformationList?: ProductInformation[];
}
