import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetLicenseNameEnum } from "./assetlicensenameenum";
export declare class AssetLicensingResponse extends SpeakeasyBase {
    acquiredLicenses?: AssetLicenseNameEnum[];
    creditsUsed?: number;
}
