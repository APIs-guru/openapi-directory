import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyConfigImagePyramidEntry } from "./destinyconfigimagepyramidentry";
import { DestinyConfigGearAssetDataBaseDefinition } from "./destinyconfiggearassetdatabasedefinition";
/**
 * DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
**/
export declare class DestinyConfigDestinyManifest extends SpeakeasyBase {
    iconImagePyramidInfo?: DestinyConfigImagePyramidEntry[];
    jsonWorldComponentContentPaths?: Map<string, Map<string, string>>;
    jsonWorldContentPaths?: Map<string, string>;
    mobileAssetContentPath?: string;
    mobileClanBannerDatabasePath?: string;
    mobileGearAssetDataBases?: DestinyConfigGearAssetDataBaseDefinition[];
    mobileGearCdn?: Map<string, string>;
    mobileWorldContentPaths?: Map<string, string>;
    version?: string;
}
