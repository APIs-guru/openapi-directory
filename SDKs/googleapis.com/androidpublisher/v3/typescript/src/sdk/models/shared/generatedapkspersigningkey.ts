import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeneratedAssetPackSlice } from "./generatedassetpackslice";
import { GeneratedSplitApk } from "./generatedsplitapk";
import { GeneratedStandaloneApk } from "./generatedstandaloneapk";
import { GeneratedUniversalApk } from "./generateduniversalapk";



// GeneratedApksPerSigningKey
/** 
 * Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
**/
export class GeneratedApksPerSigningKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateSha256Hash" })
  certificateSha256Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=generatedAssetPackSlices", elemType: GeneratedAssetPackSlice })
  generatedAssetPackSlices?: GeneratedAssetPackSlice[];

  @SpeakeasyMetadata({ data: "json, name=generatedSplitApks", elemType: GeneratedSplitApk })
  generatedSplitApks?: GeneratedSplitApk[];

  @SpeakeasyMetadata({ data: "json, name=generatedStandaloneApks", elemType: GeneratedStandaloneApk })
  generatedStandaloneApks?: GeneratedStandaloneApk[];

  @SpeakeasyMetadata({ data: "json, name=generatedUniversalApk" })
  generatedUniversalApk?: GeneratedUniversalApk;
}
