import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseConfigurationStatusEnum } from "./licenseconfigurationstatusenum";
import { ProductInformation } from "./productinformation";



export class UpdateLicenseConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisassociateWhenNotFound" })
  disassociateWhenNotFound?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationStatus" })
  licenseConfigurationStatus?: LicenseConfigurationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LicenseCount" })
  licenseCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LicenseCountHardLimit" })
  licenseCountHardLimit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LicenseRules" })
  licenseRules?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductInformationList", elemType: ProductInformation })
  productInformationList?: ProductInformation[];
}
