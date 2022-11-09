import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutomatedDiscoveryInformation } from "./automateddiscoveryinformation";
import { ConsumedLicenseSummary } from "./consumedlicensesummary";
import { LicenseCountingTypeEnum } from "./licensecountingtypeenum";
import { ManagedResourceSummary } from "./managedresourcesummary";
import { ProductInformation } from "./productinformation";


// LicenseConfiguration
/** 
 * A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.
**/
export class LicenseConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomatedDiscoveryInformation" })
  automatedDiscoveryInformation?: AutomatedDiscoveryInformation;

  @Metadata({ data: "json, name=ConsumedLicenseSummaryList", elemType: shared.ConsumedLicenseSummary })
  consumedLicenseSummaryList?: ConsumedLicenseSummary[];

  @Metadata({ data: "json, name=ConsumedLicenses" })
  consumedLicenses?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisassociateWhenNotFound" })
  disassociateWhenNotFound?: boolean;

  @Metadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn?: string;

  @Metadata({ data: "json, name=LicenseConfigurationId" })
  licenseConfigurationId?: string;

  @Metadata({ data: "json, name=LicenseCount" })
  licenseCount?: number;

  @Metadata({ data: "json, name=LicenseCountHardLimit" })
  licenseCountHardLimit?: boolean;

  @Metadata({ data: "json, name=LicenseCountingType" })
  licenseCountingType?: LicenseCountingTypeEnum;

  @Metadata({ data: "json, name=LicenseRules" })
  licenseRules?: string[];

  @Metadata({ data: "json, name=ManagedResourceSummaryList", elemType: shared.ManagedResourceSummary })
  managedResourceSummaryList?: ManagedResourceSummary[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OwnerAccountId" })
  ownerAccountId?: string;

  @Metadata({ data: "json, name=ProductInformationList", elemType: shared.ProductInformation })
  productInformationList?: ProductInformation[];

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
