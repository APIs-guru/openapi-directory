import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LicenseCountingTypeEnum } from "./licensecountingtypeenum";
import { ProductInformation } from "./productinformation";
import { Tag } from "./tag";


export class CreateLicenseConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisassociateWhenNotFound" })
  disassociateWhenNotFound?: boolean;

  @Metadata({ data: "json, name=LicenseCount" })
  licenseCount?: number;

  @Metadata({ data: "json, name=LicenseCountHardLimit" })
  licenseCountHardLimit?: boolean;

  @Metadata({ data: "json, name=LicenseCountingType" })
  licenseCountingType: LicenseCountingTypeEnum;

  @Metadata({ data: "json, name=LicenseRules" })
  licenseRules?: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ProductInformationList", elemType: shared.ProductInformation })
  productInformationList?: ProductInformation[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
