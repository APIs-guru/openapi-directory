import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainIspPlacement } from "./domainispplacement";
import { VolumeStatistics } from "./volumestatistics";


// DailyVolume
/** 
 * An object that contains information about the volume of email sent on each day of the analysis period.
**/
export class DailyVolume extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainIspPlacements", elemType: shared.DomainIspPlacement })
  domainIspPlacements?: DomainIspPlacement[];

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=VolumeStatistics" })
  volumeStatistics?: VolumeStatistics;
}
