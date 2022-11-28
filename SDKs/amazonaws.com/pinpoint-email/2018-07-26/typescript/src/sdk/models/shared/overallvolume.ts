import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainIspPlacement } from "./domainispplacement";
import { VolumeStatistics } from "./volumestatistics";



// OverallVolume
/** 
 * An object that contains information about email that was sent from the selected domain.
**/
export class OverallVolume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainIspPlacements", elemType: DomainIspPlacement })
  domainIspPlacements?: DomainIspPlacement[];

  @SpeakeasyMetadata({ data: "json, name=ReadRatePercent" })
  readRatePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=VolumeStatistics" })
  volumeStatistics?: VolumeStatistics;
}
