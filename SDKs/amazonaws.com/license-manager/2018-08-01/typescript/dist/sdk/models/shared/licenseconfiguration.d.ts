import { SpeakeasyBase } from "../../../internal/utils";
import { AutomatedDiscoveryInformation } from "./automateddiscoveryinformation";
import { ConsumedLicenseSummary } from "./consumedlicensesummary";
import { LicenseCountingTypeEnum } from "./licensecountingtypeenum";
import { ManagedResourceSummary } from "./managedresourcesummary";
import { ProductInformation } from "./productinformation";
/**
 * A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.
**/
export declare class LicenseConfiguration extends SpeakeasyBase {
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
}
