import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LicenseConfigurationStatusEnum } from "./licenseconfigurationstatusenum";
import { ProductInformation } from "./productinformation";


export class UpdateLicenseConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisassociateWhenNotFound" })
  disassociateWhenNotFound?: boolean;

  @Metadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;

  @Metadata({ data: "json, name=LicenseConfigurationStatus" })
  licenseConfigurationStatus?: LicenseConfigurationStatusEnum;

  @Metadata({ data: "json, name=LicenseCount" })
  licenseCount?: number;

  @Metadata({ data: "json, name=LicenseCountHardLimit" })
  licenseCountHardLimit?: boolean;

  @Metadata({ data: "json, name=LicenseRules" })
  licenseRules?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProductInformationList", elemType: shared.ProductInformation })
  productInformationList?: ProductInformation[];
}
