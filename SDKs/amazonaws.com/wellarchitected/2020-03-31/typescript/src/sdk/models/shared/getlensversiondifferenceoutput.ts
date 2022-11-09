import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VersionDifferences } from "./versiondifferences";


export class GetLensVersionDifferenceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseLensVersion" })
  baseLensVersion?: string;

  @Metadata({ data: "json, name=LatestLensVersion" })
  latestLensVersion?: string;

  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @Metadata({ data: "json, name=VersionDifferences" })
  versionDifferences?: VersionDifferences;
}
