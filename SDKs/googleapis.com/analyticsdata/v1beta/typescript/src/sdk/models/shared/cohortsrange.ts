import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CohortsRangeGranularityEnum {
    GranularityUnspecified = "GRANULARITY_UNSPECIFIED"
,    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    Monthly = "MONTHLY"
}


// CohortsRange
/** 
 * Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.
**/
export class CohortsRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=granularity" })
  granularity?: CohortsRangeGranularityEnum;

  @Metadata({ data: "json, name=startOffset" })
  startOffset?: number;
}
