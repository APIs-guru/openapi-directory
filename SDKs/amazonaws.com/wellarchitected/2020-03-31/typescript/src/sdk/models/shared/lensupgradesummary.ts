import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LensUpgradeSummary
/** 
 * Lens upgrade summary return object.
**/
export class LensUpgradeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentLensVersion" })
  currentLensVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestLensVersion" })
  latestLensVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
