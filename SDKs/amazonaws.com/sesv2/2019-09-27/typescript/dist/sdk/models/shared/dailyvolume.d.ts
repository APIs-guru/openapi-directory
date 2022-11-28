import { SpeakeasyBase } from "../../../internal/utils";
import { DomainIspPlacement } from "./domainispplacement";
import { VolumeStatistics } from "./volumestatistics";
/**
 * An object that contains information about the volume of email sent on each day of the analysis period.
**/
export declare class DailyVolume extends SpeakeasyBase {
    domainIspPlacements?: DomainIspPlacement[];
    startDate?: Date;
    volumeStatistics?: VolumeStatistics;
}
