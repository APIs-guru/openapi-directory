import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CohortsRangeGranularityEnum {
    GranularityUnspecified = "GRANULARITY_UNSPECIFIED",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY"
}
/**
 * Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.
**/
export declare class CohortsRange extends SpeakeasyBase {
    endOffset?: number;
    granularity?: CohortsRangeGranularityEnum;
    startOffset?: number;
}
