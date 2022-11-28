import { SpeakeasyBase } from "../../../internal/utils";
import { AutomatedDiscoveryInformation } from "./automateddiscoveryinformation";
import { ConsumedLicenseSummary } from "./consumedlicensesummary";
import { LicenseCountingTypeEnum } from "./licensecountingtypeenum";
import { ManagedResourceSummary } from "./managedresourcesummary";
import { ProductInformation } from "./productinformation";
import { Tag } from "./tag";
export declare class GetLicenseConfigurationResponse extends SpeakeasyBase {
    automatedDiscoveryInformation?: AutomatedDiscoveryInformation;
    consumedLicenseSummaryList?: ConsumedLicenseSummary[];
    consumedLicenses?: number;
    description?: string;
    disassociateWhenNotFound?: boolean;
    licenseConfigurationArn?: string;
    licenseConfigurationId?: string;
    licenseCount?: number;
    licenseCountHardLimit?: boolean;
    licenseCountingType?: LicenseCountingTypeEnum;
    licenseRules?: string[];
    managedResourceSummaryList?: ManagedResourceSummary[];
    name?: string;
    ownerAccountId?: string;
    productInformationList?: ProductInformation[];
    status?: string;
    tags?: Tag[];
}
