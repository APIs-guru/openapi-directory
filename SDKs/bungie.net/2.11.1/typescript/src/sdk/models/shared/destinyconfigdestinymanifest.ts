import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyConfigImagePyramidEntry } from "./destinyconfigimagepyramidentry";
import { DestinyConfigGearAssetDataBaseDefinition } from "./destinyconfiggearassetdatabasedefinition";



// DestinyConfigDestinyManifest
/** 
 * DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
**/
export class DestinyConfigDestinyManifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyConfigImagePyramidEntry })
  iconImagePyramidInfo?: DestinyConfigImagePyramidEntry[];

  @SpeakeasyMetadata()
  jsonWorldComponentContentPaths?: Map<string, Map<string, string>>;

  @SpeakeasyMetadata()
  jsonWorldContentPaths?: Map<string, string>;

  @SpeakeasyMetadata()
  mobileAssetContentPath?: string;

  @SpeakeasyMetadata()
  mobileClanBannerDatabasePath?: string;

  @SpeakeasyMetadata({ elemType: DestinyConfigGearAssetDataBaseDefinition })
  mobileGearAssetDataBases?: DestinyConfigGearAssetDataBaseDefinition[];

  @SpeakeasyMetadata()
  mobileGearCdn?: Map<string, string>;

  @SpeakeasyMetadata()
  mobileWorldContentPaths?: Map<string, string>;

  @SpeakeasyMetadata()
  version?: string;
}
