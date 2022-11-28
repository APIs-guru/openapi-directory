import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CohortsRangeGranularityEnum {
    GranularityUnspecified = "GRANULARITY_UNSPECIFIED",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY"
}


// CohortsRange
/** 
 * Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.
**/
export class CohortsRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=granularity" })
  granularity?: CohortsRangeGranularityEnum;

  @SpeakeasyMetadata({ data: "json, name=startOffset" })
  startOffset?: number;
}
