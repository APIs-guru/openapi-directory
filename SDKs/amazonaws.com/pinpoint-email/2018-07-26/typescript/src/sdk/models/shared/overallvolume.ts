import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainIspPlacement } from "./domainispplacement";
import { VolumeStatistics } from "./volumestatistics";


// OverallVolume
/** 
 * An object that contains information about email that was sent from the selected domain.
**/
export class OverallVolume extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainIspPlacements", elemType: shared.DomainIspPlacement })
  domainIspPlacements?: DomainIspPlacement[];

  @Metadata({ data: "json, name=ReadRatePercent" })
  readRatePercent?: number;

  @Metadata({ data: "json, name=VolumeStatistics" })
  volumeStatistics?: VolumeStatistics;
}
