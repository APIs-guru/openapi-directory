import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseCountingTypeEnum } from "./licensecountingtypeenum";
import { ProductInformation } from "./productinformation";
import { Tag } from "./tag";
export declare class CreateLicenseConfigurationRequest extends SpeakeasyBase {
    description?: string;
    disassociateWhenNotFound?: boolean;
    licenseCount?: number;
    licenseCountHardLimit?: boolean;
    licenseCountingType: LicenseCountingTypeEnum;
    licenseRules?: string[];
    name: string;
    productInformationList?: ProductInformation[];
    tags?: Tag[];
}
