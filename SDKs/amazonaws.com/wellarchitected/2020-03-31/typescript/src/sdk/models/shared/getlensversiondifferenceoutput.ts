import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VersionDifferences } from "./versiondifferences";



export class GetLensVersionDifferenceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseLensVersion" })
  baseLensVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestLensVersion" })
  latestLensVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionDifferences" })
  versionDifferences?: VersionDifferences;
}
