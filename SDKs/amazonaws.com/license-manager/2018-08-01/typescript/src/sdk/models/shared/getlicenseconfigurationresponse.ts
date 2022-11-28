import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomatedDiscoveryInformation } from "./automateddiscoveryinformation";
import { ConsumedLicenseSummary } from "./consumedlicensesummary";
import { LicenseCountingTypeEnum } from "./licensecountingtypeenum";
import { ManagedResourceSummary } from "./managedresourcesummary";
import { ProductInformation } from "./productinformation";
import { Tag } from "./tag";



export class GetLicenseConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomatedDiscoveryInformation" })
  automatedDiscoveryInformation?: AutomatedDiscoveryInformation;

  @SpeakeasyMetadata({ data: "json, name=ConsumedLicenseSummaryList", elemType: ConsumedLicenseSummary })
  consumedLicenseSummaryList?: ConsumedLicenseSummary[];

  @SpeakeasyMetadata({ data: "json, name=ConsumedLicenses" })
  consumedLicenses?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisassociateWhenNotFound" })
  disassociateWhenNotFound?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationId" })
  licenseConfigurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseCount" })
  licenseCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LicenseCountHardLimit" })
  licenseCountHardLimit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LicenseCountingType" })
  licenseCountingType?: LicenseCountingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LicenseRules" })
  licenseRules?: string[];

  @SpeakeasyMetadata({ data: "json, name=ManagedResourceSummaryList", elemType: ManagedResourceSummary })
  managedResourceSummaryList?: ManagedResourceSummary[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerAccountId" })
  ownerAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductInformationList", elemType: ProductInformation })
  productInformationList?: ProductInformation[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
