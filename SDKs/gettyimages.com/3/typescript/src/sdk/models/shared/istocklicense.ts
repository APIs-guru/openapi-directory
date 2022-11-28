import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetLicenseNameEnum } from "./assetlicensenameenum";



export class IStockLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credits" })
  credits?: number;

  @SpeakeasyMetadata({ data: "json, name=license_type" })
  licenseType?: AssetLicenseNameEnum;
}
