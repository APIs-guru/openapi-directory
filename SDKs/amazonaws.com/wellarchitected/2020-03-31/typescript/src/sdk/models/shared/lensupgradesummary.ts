import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LensUpgradeSummary
/** 
 * Lens upgrade summary return object.
**/
export class LensUpgradeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentLensVersion" })
  currentLensVersion?: string;

  @Metadata({ data: "json, name=LatestLensVersion" })
  latestLensVersion?: string;

  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @Metadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
