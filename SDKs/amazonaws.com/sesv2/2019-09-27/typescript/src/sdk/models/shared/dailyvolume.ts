import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainIspPlacement } from "./domainispplacement";
import { VolumeStatistics } from "./volumestatistics";



// DailyVolume
/** 
 * An object that contains information about the volume of email sent on each day of the analysis period.
**/
export class DailyVolume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainIspPlacements", elemType: DomainIspPlacement })
  domainIspPlacements?: DomainIspPlacement[];

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=VolumeStatistics" })
  volumeStatistics?: VolumeStatistics;
}
