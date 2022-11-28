import { SpeakeasyBase } from "../../../internal/utils";
import { GeneratedAssetPackSlice } from "./generatedassetpackslice";
import { GeneratedSplitApk } from "./generatedsplitapk";
import { GeneratedStandaloneApk } from "./generatedstandaloneapk";
import { GeneratedUniversalApk } from "./generateduniversalapk";
/**
 * Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
**/
export declare class GeneratedApksPerSigningKey extends SpeakeasyBase {
    certificateSha256Hash?: string;
    generatedAssetPackSlices?: GeneratedAssetPackSlice[];
    generatedSplitApks?: GeneratedSplitApk[];
    generatedStandaloneApks?: GeneratedStandaloneApk[];
    generatedUniversalApk?: GeneratedUniversalApk;
}
