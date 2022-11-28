import { SpeakeasyBase } from "../../../internal/utils";
import { DomainIspPlacement } from "./domainispplacement";
import { VolumeStatistics } from "./volumestatistics";
/**
 * An object that contains information about email that was sent from the selected domain.
**/
export declare class OverallVolume extends SpeakeasyBase {
    domainIspPlacements?: DomainIspPlacement[];
    readRatePercent?: number;
    volumeStatistics?: VolumeStatistics;
}
