import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseCountingTypeEnum } from "./licensecountingtypeenum";
import { ProductInformation } from "./productinformation";
import { Tag } from "./tag";



export class CreateLicenseConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisassociateWhenNotFound" })
  disassociateWhenNotFound?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LicenseCount" })
  licenseCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LicenseCountHardLimit" })
  licenseCountHardLimit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LicenseCountingType" })
  licenseCountingType: LicenseCountingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LicenseRules" })
  licenseRules?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ProductInformationList", elemType: ProductInformation })
  productInformationList?: ProductInformation[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
