import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetLicenseNameEnum } from "./assetlicensenameenum";


export class IStockLicense extends SpeakeasyBase {
  @Metadata({ data: "json, name=credits" })
  credits?: number;

  @Metadata({ data: "json, name=license_type" })
  licenseType?: AssetLicenseNameEnum;
}
