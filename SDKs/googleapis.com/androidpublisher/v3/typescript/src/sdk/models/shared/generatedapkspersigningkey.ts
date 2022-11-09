import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeneratedAssetPackSlice } from "./generatedassetpackslice";
import { GeneratedSplitApk } from "./generatedsplitapk";
import { GeneratedStandaloneApk } from "./generatedstandaloneapk";
import { GeneratedUniversalApk } from "./generateduniversalapk";


// GeneratedApksPerSigningKey
/** 
 * Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
**/
export class GeneratedApksPerSigningKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateSha256Hash" })
  certificateSha256Hash?: string;

  @Metadata({ data: "json, name=generatedAssetPackSlices", elemType: shared.GeneratedAssetPackSlice })
  generatedAssetPackSlices?: GeneratedAssetPackSlice[];

  @Metadata({ data: "json, name=generatedSplitApks", elemType: shared.GeneratedSplitApk })
  generatedSplitApks?: GeneratedSplitApk[];

  @Metadata({ data: "json, name=generatedStandaloneApks", elemType: shared.GeneratedStandaloneApk })
  generatedStandaloneApks?: GeneratedStandaloneApk[];

  @Metadata({ data: "json, name=generatedUniversalApk" })
  generatedUniversalApk?: GeneratedUniversalApk;
}
