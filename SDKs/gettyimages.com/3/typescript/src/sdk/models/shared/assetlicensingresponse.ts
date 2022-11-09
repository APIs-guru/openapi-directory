import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetLicenseNameEnum } from "./assetlicensenameenum";


export class AssetLicensingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcquiredLicenses" })
  acquiredLicenses?: AssetLicenseNameEnum[];

  @Metadata({ data: "json, name=CreditsUsed" })
  creditsUsed?: number;
}
