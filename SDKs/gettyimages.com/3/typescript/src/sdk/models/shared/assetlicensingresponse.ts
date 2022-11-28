import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetLicenseNameEnum } from "./assetlicensenameenum";



export class AssetLicensingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcquiredLicenses" })
  acquiredLicenses?: AssetLicenseNameEnum[];

  @SpeakeasyMetadata({ data: "json, name=CreditsUsed" })
  creditsUsed?: number;
}
