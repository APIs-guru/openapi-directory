import { SpeakeasyBase } from "../../../internal/utils";
import { VersionDifferences } from "./versiondifferences";
export declare class GetLensVersionDifferenceOutput extends SpeakeasyBase {
    baseLensVersion?: string;
    latestLensVersion?: string;
    lensAlias?: string;
    versionDifferences?: VersionDifferences;
}
